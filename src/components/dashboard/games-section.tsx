
"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Wind, Puzzle, Headphones, Waves, PlayCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


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
                <Label htmlFor="music-toggle">Ambient Music</Label>
                <Switch id="music-toggle" />
            </div>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 items-start">
            <Link href="/dashboard/breathing-exercise" className="block h-full">
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Wind className="text-primary"/>Breathing Exercise</CardTitle>
                        <CardDescription>Follow the circle to guide your breath. Inhale as it expands, exhale as it contracts.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center p-8 min-h-[300px]">
                        <BreathingCircle/>
                    </CardContent>
                </Card>
            </Link>

            <Link href="/dashboard/sound-therapy" className="block h-full">
                 <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Headphones className="text-primary"/>Sound Therapy</CardTitle>
                        <CardDescription>Use binaural beats to guide your mind into a state of relaxation or focus.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center p-6 min-h-[300px] bg-muted/50 rounded-b-lg space-y-6">
                        <Button variant="outline" size="lg" className="h-20 w-20 rounded-full p-0" disabled>
                            <PlayCircle className="h-12 w-12 text-muted-foreground" />
                        </Button>
                        <div className="w-full max-w-[250px]">
                            <Select disabled>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Frequency" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="delta">Delta (Sleep)</SelectItem>
                                    <SelectItem value="theta">Theta (Meditate)</SelectItem>
                                    <SelectItem value="alpha">Alpha (Focus)</SelectItem>
                                    <SelectItem value="beta">Beta (Energy)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                         <Button variant="outline" size="lg" disabled>Coming Soon</Button>
                    </CardContent>
                </Card>
            </Link>

            <Link href="/dashboard/zen-garden" className="block h-full">
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Waves className="text-primary"/>Zen Garden</CardTitle>
                        <CardDescription>Create calming patterns in your digital sand garden.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center p-8 min-h-[300px] bg-muted/50 rounded-b-lg">
                        <Image src="https://picsum.photos/seed/zen/300/200" alt="Zen Garden" width={300} height={200} className="rounded-lg shadow-lg mb-6 w-full max-w-[300px]" data-ai-hint="zen garden sand"/>
                        <Button variant="outline" size="lg" disabled>Coming Soon</Button>
                    </CardContent>
                </Card>
            </Link>
        </CardContent>
    </Card>
  );
}
