"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Wind, Puzzle } from "lucide-react";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";

function BreathingCircle() {
    return (
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center">
            <div className="absolute w-full h-full bg-primary/20 rounded-full animate-pulse-slow"></div>
            <div className="absolute w-2/3 h-2/3 bg-primary/30 rounded-full animate-pulse-slower"></div>
            <div className="absolute w-1/3 h-1/3 bg-primary/40 rounded-full"></div>
            <div className="absolute text-foreground font-semibold text-lg animate-breathing-text">
                Breathe
            </div>
        </div>
    )
}

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
                <Label htmlFor="music-toggle">Background Music</Label>
                <Switch id="music-toggle" />
            </div>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6 items-start">
            <Card className="shadow-xl">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Wind className="text-primary"/>Breathing Exercise</CardTitle>
                    <CardDescription>Follow the circle to guide your breath. Inhale as it expands, exhale as it contracts.</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-center p-8 min-h-[300px]">
                    <BreathingCircle/>
                </CardContent>
            </Card>
             <Card className="shadow-xl">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Puzzle className="text-primary"/>Mind Puzzles</CardTitle>
                    <CardDescription>Simple, relaxing puzzles to help you focus your mind.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center p-8 min-h-[300px] bg-muted/50 rounded-b-lg">
                    <Image src="https://picsum.photos/300/200" alt="Puzzle" width={300} height={200} className="rounded-lg shadow-lg mb-6 w-full max-w-[300px]" data-ai-hint="calm landscape"/>
                    <Button variant="outline" size="lg" disabled>Coming Soon</Button>
                </CardContent>
            </Card>
        </CardContent>
    </Card>
  );
}
