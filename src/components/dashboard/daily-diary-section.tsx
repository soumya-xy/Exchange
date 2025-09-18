"use client";

import { useState, useEffect } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { BookCheck, Star, Loader2 } from "lucide-react";
import { addDays, format } from 'date-fns';
import { useAuth } from "@/contexts/auth-context"; // 1. Import useAuth


// This can be the type for a single entry
type JournalEntry = {
  mood: number;
  entry: string;
};

// This will be the structure for your journal data
type JournalData = {
  [date: string]: JournalEntry;
};

const chartConfig = {
  mood: {
    label: "Mood (1-10)",
    color: "hsl(var(--primary))",
  },
};

export function DailyDiarySection() {
  const { user } = useAuth(); // 2. Get the user from the auth context
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [journalData, setJournalData] = useState<JournalData>({});
  const [isLoading, setIsLoading] = useState(true); // For initial data load
  const [isSaving, setIsSaving] = useState(false); // For the save button

  // --- 3. DATA FETCHING: Fetch entries when the component loads ---
  useEffect(() => {
    const fetchJournalEntries = async () => {
      if (!user) return;
      setIsLoading(true);
      try {
        const token = await user.getIdToken();
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000';
        // Build query params similar to backend signature: startDate, endDate, limit, includeInsights
        const endDate = new Date();
        const startDate = addDays(endDate, -30); // fetch last 30 days
        const params = new URLSearchParams({
          startDate: format(startDate, 'yyyy-MM-dd'),
          endDate: format(endDate, 'yyyy-MM-dd'),
          limit: '500',
          includeInsights: 'false',
        });

        const response = await fetch(`${backendUrl}/api/diary/entries?${params.toString()}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error("Failed to fetch entries");

        type BackendEntry = {
          date: string; // ISO date string or yyyy-MM-dd
          content: string;
          mood: number;
          tags?: string[];
        };

        const payload = await response.json() as { success: boolean; data: BackendEntry[] };
        if (!payload?.success || !Array.isArray(payload.data)) {
          throw new Error('Invalid entries response');
        }

        // Transform backend list into JournalData keyed by yyyy-MM-dd
        const transformed: JournalData = payload.data.reduce((acc, entry) => {
          const key = format(new Date(entry.date), 'yyyy-MM-dd');
          acc[key] = { mood: entry.mood, entry: entry.content };
          return acc;
        }, {} as JournalData);

        setJournalData(transformed);
      } catch (error) {
        console.error("Error fetching journal data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchJournalEntries();
  }, [user]); // Re-fetch if the user changes

  const todayStr = date ? format(date, "yyyy-MM-dd") : "";
  const currentEntry = journalData[todayStr];

  const chartData = Array.from({ length: 7 }, (_, i) => {
    const day = addDays(new Date(), i - 6);
    const dayStr = format(day, "yyyy-MM-dd");
    const entry = journalData[dayStr];
    return {
      date: format(day, "MMM d"),
      mood: entry ? entry.mood : null,
    };
  });

  // Build a list of prior entries for UI rendering
  const previousEntries = Object.entries(journalData)
    .map(([dateStr, entry]) => ({ dateStr, ...entry }))
    .sort((a, b) => new Date(b.dateStr).getTime() - new Date(a.dateStr).getTime());

  // Calculate consecutive-day check-in streak ending today
  const checkInStreak = (() => {
    let streak = 0;
    for (let i = 0; i < 365; i++) {
      const day = addDays(new Date(), -i);
      const key = format(day, "yyyy-MM-dd");
      const entry = journalData[key];
      if (entry && entry.entry?.trim()) {
        streak++;
      } else {
        break;
      }
    }
    return streak;
  })();

  // --- 4. API CALL TO SAVE ENTRY ---
  const handleSaveEntry = async () => {
    if (!user || !date || !currentEntry) return;
  
    setIsSaving(true);
    try {
      const token = await user.getIdToken();
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000';
      
      // NOTE: You may need to update the endpoint path if it's different
      const response = await fetch(`${backendUrl}/api/diary/entries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        // ✅ This is the corrected body format
        body: JSON.stringify({
          content: currentEntry.entry, // Use 'content' key instead of 'entry'
          mood: currentEntry.mood,
          tags: [], // Send an empty array for tags for now
        }),
      });
  
      if (!response.ok) throw new Error("Failed to save entry");
      
      console.log("Entry saved successfully!");
  
    } catch (error) {
      console.error("Error saving entry:", error);
    } finally {
      setIsSaving(false);
    }
  };
  
  // --- 5. Update local state when typing in the textarea ---
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (date) {
      const newEntryText = e.target.value;
      const newEntry: JournalEntry = { 
        mood: currentEntry?.mood || 5, // Default mood to 5 if not set
        entry: newEntryText 
      };
      setJournalData(prev => ({ ...prev, [todayStr]: newEntry }));
    }
  };

  // ... The rest of your JSX is mostly the same, just with the updated Button
  // (I've removed the streak card for brevity, you can add it back)
return (
  <Card className="shadow-none border-none bg-transparent">
      <CardHeader>
          <CardTitle className="text-xl md:text-2xl font-bold">Daily Diary & Progress</CardTitle>
          <CardDescription>Reflect on your day, track your mood, and see your journey.</CardDescription>
      </CardHeader>
      <CardContent className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
             
              <Card className="shadow-lg">
                  <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                          <BookCheck className="text-primary"/> Daily Reflection
                      </CardTitle>
                      <CardDescription>
                          {date ? format(date, "EEEE, MMMM do") : 'Select a day'}
                      </CardDescription>
                  </CardHeader>
                  <CardContent>
                      <Textarea 
                          placeholder="How was your day? What's on your mind?" 
                          className="min-h-[120px] text-base"
                          value={currentEntry?.entry || ""}
                          onChange={(e) => {
                              if (date) {
                                  const newEntry = { mood: currentEntry?.mood || 5, entry: e.target.value };
                                  setJournalData(prev => ({ ...prev, [todayStr]: newEntry }));
                              }
                          }}
                      />
                  </CardContent>
                  <CardFooter className="flex justify-end">
                      <Button onClick={handleSaveEntry} disabled={isSaving}>
                        {isSaving ? (
                          <span className="inline-flex items-center gap-2"><Loader2 className="h-4 w-4 animate-spin" /> Saving...</span>
                        ) : (
                          "Save Entry"
                        )}
                      </Button>
                  </CardFooter>
              </Card>
              <Card className="shadow-lg">
                  <CardHeader>
                      <CardTitle>Your Weekly Mood</CardTitle>
                      <CardDescription>Visualize your emotional trends over the last 7 days.</CardDescription>
                  </CardHeader>
                  <CardContent>
                      <ChartContainer config={chartConfig} className="h-[200px] sm:h-[250px] w-full">
                          <BarChart accessibilityLayer data={chartData} margin={{ top: 20, right: 10, left: -20, bottom: 0}}>
                          <CartesianGrid vertical={false} strokeDasharray="3 3" />
                          <XAxis
                              dataKey="date"
                              tickLine={false}
                              tickMargin={10}
                              axisLine={false}
                              stroke="hsl(var(--muted-foreground))"
                              fontSize={12}
                          />
                            <YAxis
                              domain={[0, 10]}
                              tickLine={false}
                              axisLine={false}
                              tickMargin={10}
                              stroke="hsl(var(--muted-foreground))"
                              fontSize={12}
                            />
                          <ChartTooltip
                              cursor={false}
                              content={<ChartTooltipContent indicator="dot" />}
                          />
                          <Bar dataKey="mood" fill="var(--color-mood)" radius={window.innerWidth < 640 ? 4 : 8} />
                          </BarChart>
                      </ChartContainer>
                  </CardContent>
              </Card>
          </div>
          <div className="space-y-6">
                <Card className="shadow-lg">
                  <CardContent className="p-2 sm:p-4 flex justify-center">
                      <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          className="rounded-md"
                          modifiers={{
                              logged: Object.keys(journalData).map(dateStr => new Date(dateStr.replace(/-/g, '/')))
                          }}
                          modifiersStyles={{
                              logged: {
                                  borderColor: 'hsl(var(--primary))',
                                  borderWidth: '2px',
                              }
                          }}
                      />
                  </CardContent>
              </Card>
              <Card className="shadow-lg bg-gradient-to-br from-primary/80 to-accent/80 text-primary-foreground">
                  <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                          <Star />
                          Motivational Streak
                      </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                      <p className="text-5xl font-bold">{checkInStreak}</p>
                      <p className="text-lg">days in a row!</p>
                      <p className="text-sm mt-2 opacity-90">Keep it up, you're doing great. 🌟</p>
                  </CardContent>
              </Card>
              <Card className="shadow-lg">
                  <CardHeader>
                      <CardTitle className="text-lg md:text-xl">Previous Entries</CardTitle>
                      <CardDescription>Tap a date to view or continue editing.</CardDescription>
                  </CardHeader>
                  <CardContent>
                      {isLoading ? (
                        <div className="text-sm text-muted-foreground">Loading entries...</div>
                      ) : previousEntries.length === 0 ? (
                        <div className="text-sm text-muted-foreground">No entries yet.</div>
                      ) : (
                        <ul className="space-y-3">
                          {previousEntries.slice(0, 10).map(({ dateStr, entry, mood }) => (
                            <li key={dateStr}>
                              <button
                                type="button"
                                className="w-full text-left p-3 rounded-md hover:bg-muted transition"
                                onClick={() => setDate(new Date(dateStr.replace(/-/g, '/')))}
                              >
                                <div className="flex items-center justify-between">
                                  <span className="font-medium">{format(new Date(dateStr.replace(/-/g, '/')), 'EEE, MMM d, yyyy')}</span>
                                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">Mood: {mood}</span>
                                </div>
                                <p className="mt-1 text-sm line-clamp-2 text-muted-foreground">{entry}</p>
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                  </CardContent>
              </Card>
          </div>
      </CardContent>
  </Card>
);
}