"use client"

import { useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { BookCheck, Star } from "lucide-react";
import { addDays, format } from 'date-fns';

const MOCK_DATA = {
  "2024-07-15": { mood: 6, entry: "Felt pretty good today. Finished a big project at work." },
  "2024-07-16": { mood: 7, entry: "Had a great time with friends. Feeling energized." },
  "2024-07-17": { mood: 5, entry: "A bit stressed about the upcoming week. Tried to relax." },
  "2024-07-18": { mood: 8, entry: "Productive day! Also managed to get a workout in." },
  "2024-07-19": { mood: 7, entry: "Weekend is almost here. Looking forward to some rest." },
  "2024-07-20": { mood: 9, entry: "Amazing Saturday. Spent the day outdoors." },
  "2024-07-21": { mood: 8, entry: "Relaxing Sunday. Ready for the week." },
};

const chartConfig = {
  mood: {
    label: "Mood (1-10)",
    color: "hsl(var(--primary))",
  },
}

const checkInStreak = 5;

export function DailyDiarySection() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [journalData, setJournalData] = useState(MOCK_DATA);

  const todayStr = date ? format(date, "yyyy-MM-dd") : "";
  const currentEntry = journalData[todayStr as keyof typeof journalData];

  const chartData = Array.from({ length: 7 }, (_, i) => {
    const day = addDays(new Date(), i - 6);
    const dayStr = format(day, "yyyy-MM-dd");
    const entry = journalData[dayStr as keyof typeof journalData];
    return {
      date: format(day, "MMM d"),
      mood: entry ? entry.mood : null,
    };
  });
  
  return (
    <Card className="shadow-none border-none bg-transparent">
        <CardHeader>
            <CardTitle className="text-2xl font-bold">Daily Diary & Progress</CardTitle>
            <CardDescription>Reflect on your day, track your mood, and see your journey.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle>Your Weekly Mood</CardTitle>
                        <CardDescription>Visualize your emotional trends over the last 7 days.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig} className="h-[250px] w-full">
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
                            <Bar dataKey="mood" fill="var(--color-mood)" radius={8} />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
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
                        <Button>Save Entry</Button>
                    </CardFooter>
                </Card>

            </div>
            <div className="space-y-6">
                 <Card className="shadow-lg">
                    <CardContent className="p-4">
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
                        <CardTitle className="flex items-center gap-2">
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
            </div>
        </CardContent>
    </Card>
  )
}
