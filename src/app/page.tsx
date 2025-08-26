import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/header";
import { BrainCircuit, MessageSquareQuote, Sparkles, TrendingUp } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-background to-secondary">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Find Your Inner Peace with Mann Saathi
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    An AI-powered, confidential, and empathetic mental wellness companion designed for the youth of India.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/auth">Get Started</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="https://picsum.photos/600/600"
                width="600"
                height="600"
                alt="Hero"
                data-ai-hint="indian youth"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                  A new way to care for your mind
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our app provides you with the tools and support you need to navigate life's challenges with confidence and resilience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <BrainCircuit className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>AI Journaling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Receive empathetic responses and personalized wellness tips from our advanced AI when you share your thoughts.</p>
                </CardContent>
              </Card>
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Affirmation Generation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Create personalized positive affirmations to boost your self-esteem and foster a positive mindset.</p>
                </CardContent>
              </Card>
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Progress Visualization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Track your mental wellness journey with intuitive charts and visualizations to see how far you've come.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
                Ready to start your journey?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A safe and supportive space is just a click away. Sign up now and take the first step towards a healthier mind.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Button asChild size="lg">
                <Link href="/auth">Join Mann Saathi Today</Link>
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
          <p className="text-xs hover:underline underline-offset-4 text-muted-foreground">
            Disclaimer: Mann Saathi is an AI companion and not a replacement for professional medical advice.
          </p>
        </nav>
      </footer>
    </div>
  );
}
