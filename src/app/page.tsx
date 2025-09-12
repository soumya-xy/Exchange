import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/header";
import { User, Map, BarChart, BookOpen, Heart, BrainCircuit, Bot, Activity } from "lucide-react";
import { WavesDemo } from "@/components/ui/waves-demo";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        
        <section className="relative w-full pt-32 pb-50 md:pt-48 md:pb-60 text-center overflow-hidden">        <div className="absolute inset-0 pointer-events-none z-0">
        <WavesDemo />
        </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-background to-accent/10 -z-10"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline text-foreground">
                Mann Saathi: A Friend for Your Mind.
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Embrace a guided journey to reduce stress, understand your emotions, and build a lasting sense of peace. Your wellness companion is here.
              </p>
              <div className="mt-6">
                <Button asChild size="lg" className="shadow-lg">
                  <Link href="/auth">Start Your Journey for Free</Link>
                </Button>
              </div>
            </div>
            <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[150%] h-[80%] bg-primary/5 rounded-full blur-3xl -z-10"></div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-16 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-3 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
                A Simple, Guided Path
              </h2>
              <p className="max-w-[600px] mx-auto text-muted-foreground md:text-lg">
                Getting started on your path to wellness is easy.
              </p>
            </div>
            <div className="relative grid md:grid-cols-3 gap-12">
               <div className="absolute top-1/2 left-0 w-full h-px bg-border -translate-y-1/2 hidden md:block"></div>
               {/* Step 1 */}
              <div className="relative flex flex-col items-center text-center p-4">
                <div className="mb-4 bg-background border p-4 rounded-full shadow-sm z-10">
                   <User className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Create Your Account</h3>
                <p className="text-muted-foreground">Sign up in seconds and tell us a little about your wellness goals.</p>
              </div>
              {/* Step 2 */}
              <div className="relative flex flex-col items-center text-center p-4">
                 <div className="mb-4 bg-background border p-4 rounded-full shadow-sm z-10">
                   <Map className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Your Personal Plan</h3>
                <p className="text-muted-foreground">Receive daily exercises, guided meditations, and mood-tracking tools tailored for you.</p>
              </div>
              {/* Step 3 */}
              <div className="relative flex flex-col items-center text-center p-4">
                 <div className="mb-4 bg-background border p-4 rounded-full shadow-sm z-10">
                   <BarChart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Track Your Progress</h3>
                <p className="text-muted-foreground">Watch your personal growth over time and celebrate your milestones.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section id="features" className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-3 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
                Tools for Your Wellness Toolkit
              </h2>
              <p className="max-w-[600px] mx-auto text-muted-foreground md:text-lg">
                Everything you need to support your mental wellness journey.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-2">
              <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <BrainCircuit className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Guided Meditations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Access a library of calming meditations for sleep, stress, and focus.</p>
                </CardContent>
              </Card>
              <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Activity className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Mood Journaling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Track your emotions and gain insights into your mental patterns.</p>
                </CardContent>
              </Card>
              <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Bot className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Personalized Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Receive gentle, AI-powered feedback to understand your triggers and strengths.</p>
                </CardContent>
              </Card>
              <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Expert Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Read articles and watch videos from licensed wellness professionals.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* The "Why" Section */}
        <section className="w-full py-16 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight font-headline">Because Your Mental Health Matters</h2>
                <p className="text-muted-foreground text-lg">
                  In today's fast-paced world, taking a moment for yourself is more important than ever. Mann Saathi was born from a desire to provide a compassionate, accessible companion for your mental wellness journey. We believe in the power of small, consistent steps to create lasting positive change. Our mission is to empower you with tools that are not just effective, but also feel like a friend.
                </p>
              </div>
              <Image
                src="https://picsum.photos/seed/people/600/400"
                width="600"
                height="400"
                alt="Supportive friends"
                data-ai-hint="people support"
                className="mx-auto rounded-xl object-cover shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-16 md:py-24">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl/tight font-headline">
                Ready to Begin?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Your path to a healthier mind is one click away. Join a supportive space designed just for you.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2 mt-4">
              <Button asChild size="lg" className="shadow-lg">
                <Link href="/auth">Start Your Journey for Free</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Mann Saathi. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
           <Link href="#" className="text-xs hover:underline underline-offset-4 text-muted-foreground">Terms</Link>
           <Link href="#" className="text-xs hover:underline underline-offset-4 text-muted-foreground">Privacy</Link>
        </nav>
      </footer>
    </div>
  );
}
