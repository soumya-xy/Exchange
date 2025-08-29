"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";
import { Header } from "@/components/header";
import { Loader2 } from "lucide-react";
import { ChatbotSection } from "@/components/dashboard/chatbot-section";
import { DailyDiarySection } from "@/components/dashboard/daily-diary-section";
import { GamesSection } from "@/components/dashboard/games-section";
import { CommunityStoriesSection } from "@/components/dashboard/community-stories-section";

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 p-4 md:p-8 lg:p-12">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-4 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold font-headline">
              Welcome back, {user.name}!
            </h1>
            <p className="text-muted-foreground text-lg">
              Your safe space for mental wellness.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content: Chatbot and Daily Diary */}
            <div className="lg:col-span-2 space-y-8">
              <ChatbotSection />
              <DailyDiarySection />
            </div>

            {/* Sidebar: Games and Community Stories */}
            <div className="lg:col-span-1 space-y-8">
              <GamesSection />
              <CommunityStoriesSection />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
