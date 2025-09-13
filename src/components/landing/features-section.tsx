import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BrainCircuit, Activity, Bot, BookOpen } from "lucide-react";

export function FeaturesSection() {
  return (
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
              <p className="text-muted-foreground">
                Access a library of calming meditations for sleep, stress, and
                focus.
              </p>
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
              <p className="text-muted-foreground">
                Track your emotions and gain insights into your mental patterns.
              </p>
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
              <p className="text-muted-foreground">
                Receive gentle, AI-powered feedback to understand your triggers
                and strengths.
              </p>
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
              <p className="text-muted-foreground">
                Read articles and watch videos from licensed wellness
                professionals.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
