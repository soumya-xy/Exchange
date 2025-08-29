"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, Wind } from "lucide-react";
import { Button } from "../ui/button";

export function GamesSection() {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
            <Gamepad2 className="text-primary"/>
            Interactive Games
        </CardTitle>
        <CardDescription>Engage in activities to calm your mind.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col items-center p-4 rounded-lg bg-secondary/50 text-center">
            <div className="p-3 bg-background rounded-full mb-3">
                <Wind className="w-8 h-8 text-accent"/>
            </div>
            <h3 className="font-semibold mb-1">Breathing Exercise</h3>
            <p className="text-sm text-muted-foreground mb-4">Follow the guide to regulate your breathing and find calm.</p>
            <Button variant="outline">Start Exercise</Button>
        </div>
         <div className="flex flex-col items-center p-4 rounded-lg bg-secondary/50 text-center">
            <div className="p-3 bg-background rounded-full mb-3">
                <Image src="https://picsum.photos/32/32" alt="p" width={32} height={32} className="rounded-full" data-ai-hint="puzzle piece"/>
            </div>
            <h3 className="font-semibold mb-1">Mindful Puzzle</h3>
            <p className="text-sm text-muted-foreground mb-4">A simple puzzle to help you focus and be present.</p>
            <Button variant="outline" disabled>Coming Soon</Button>
        </div>
      </CardContent>
    </Card>
  );
}
