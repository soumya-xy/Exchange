"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";
import { Header } from "@/components/header";
import { JournalingSection } from "@/components/dashboard/journaling-section";
import { AffirmationSection } from "@/components/dashboard/affirmation-section";
import { ProgressChart } from "@/components/dashboard/progress-chart";
import { Loader2 } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-4 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold font-headline">
              Welcome back, {user.name}!
            </h1>
            <p className="text-muted-foreground text-lg">
              Here are your tools for a mindful day.
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="lg:col-span-2">
              <JournalingSection />
            </div>
            <AffirmationSection />
            <ProgressChart />
          </div>
        </div>
      </main>
    </div>
  );
}
