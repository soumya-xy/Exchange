
"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Wind, Headphones, Waves, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";

const activities = [
    {
        href: "/dashboard/breathing-exercise",
        icon: <Wind className="text-primary"/>,
        title: "Breathing Exercise",
        description: "Center your mind with a guided breathing session.",
    },
    {
        href: "/dashboard/sound-therapy",
        icon: <Headphones className="text-primary"/>,
        title: "Sound Therapy",
        description: "Use calming sound frequencies to find your focus.",
    },
    {
        href: "/dashboard/zen-garden",
        icon: <Waves className="text-primary"/>,
        title: "Zen Garden",
        description: "Create calming patterns in your digital sand garden.",
    }
]

export function GamesSection() {
  return (
    <Card className="shadow-none border-none bg-transparent">
        <CardHeader className="flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
                <CardTitle className="text-xl md:text-2xl font-bold">The Calm Zone</CardTitle>
                <CardDescription>Engage in activities to calm your mind and find focus.</CardDescription>
            </div>
            <div className="flex items-center space-x-2">
                <Music className="text-muted-foreground"/>
                <Label htmlFor="music-toggle">Ambient Music</Label>
                <Switch id="music-toggle" />
            </div>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 items-start">
            {activities.map((activity) => (
                 <Link key={activity.title} href={activity.href} className="block h-full group">
                    <Card className="shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col hover:border-primary/50 border-transparent border-2">
                        <CardHeader className="flex-1">
                            <CardTitle className="flex items-center gap-2">{activity.icon}{activity.title}</CardTitle>
                            <CardDescription>{activity.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button variant="ghost" className="w-full justify-between text-primary group-hover:bg-primary/10">
                                Start Activity
                                <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                            </Button>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </CardContent>
    </Card>
  );
}
