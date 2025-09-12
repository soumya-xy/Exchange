"use client";

import { Header } from "@/components/header";
import { Loader2, MessageCircle, BookHeart, Gamepad2, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChatbotSection } from "@/components/dashboard/chatbot-section";
import { DailyDiarySection } from "@/components/dashboard/daily-diary-section";
import { GamesSection } from "@/components/dashboard/games-section";
import { CommunityStoriesSection } from "@/components/dashboard/community-stories-section";
import { ProtectedRoute } from "@/components/auth/protected-route";
import { useAuth } from "@/contexts/auth-context";

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <div className="flex flex-col min-h-screen bg-muted/30">
        <Header />
        <main className="flex-1">
          <div className="container mx-auto max-w-7xl py-6 md:py-8">
              <div className="space-y-2 mb-8">
                  <h1 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
                      Welcome back, {user?.displayName || user?.email || 'User'}!
                  </h1>
                  <p className="text-muted-foreground text-lg">
                      This is your space to reflect, grow, and find support.
                  </p>
              </div>

              <Tabs defaultValue="chatbot" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto mb-6">
                      <TabsTrigger value="chatbot" className="py-3 gap-2">
                          <MessageCircle className="h-5 w-5" />
                          AI Companion
                      </TabsTrigger>
                      <TabsTrigger value="diary" className="py-3 gap-2">
                          <BookHeart className="h-5 w-5" />
                          Daily Diary
                      </TabsTrigger>
                      <TabsTrigger value="games" className="py-3 gap-2">
                          <Gamepad2 className="h-5 w-5" />
                          Calm Zone
                      </TabsTrigger>
                      <TabsTrigger value="stories" className="py-3 gap-2">
                          <Users className="h-5 w-5" />
                          Community Stories
                      </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="chatbot">
                      <ChatbotSection />
                  </TabsContent>
                  <TabsContent value="diary">
                      <DailyDiarySection />
                  </TabsContent>
                  <TabsContent value="games">
                      <GamesSection />
                  </TabsContent>
                  <TabsContent value="stories">
                      <CommunityStoriesSection />
                  </TabsContent>
              </Tabs>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
