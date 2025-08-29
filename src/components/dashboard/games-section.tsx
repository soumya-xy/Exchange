"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, Wind } from "lucide-react";
import { Button } from "../ui/button";

export function GamesSection() {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
       <CardHeader className="flex flex-row items-center justify-between">
        <div className="space-y-1">
            <CardTitle className="text-lg">
                Interactive Games
            </CardTitle>
            <CardDescription>Engage in activities to calm your mind.</CardDescription>
        </div>
        <div className="p-3 bg-primary/10 rounded-lg">
            <Gamepad2 className="w-6 h-6 text-primary"/>
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center p-4 rounded-lg bg-secondary/30 text-center hover:bg-secondary/50 transition-colors">
            <div className="p-3 bg-background rounded-full mb-3">
                <Wind className="w-6 h-6 text-accent"/>
            </div>
            <h3 className="font-semibold text-sm mb-1">Breathing</h3>
            <p className="text-xs text-muted-foreground mb-3">Find calm and regulate your breathing.</p>
            <Button variant="outline" size="sm">Start</Button>
        </div>
         <div className="flex flex-col items-center p-4 rounded-lg bg-secondary/30 text-center">
            <div className="p-3 bg-background rounded-full mb-3">
                 <Image src="https://picsum.photos/24/24" alt="p" width={24} height={24} className="rounded-full" data-ai-hint="puzzle piece"/>
            </div>
            <h3 className="font-semibold text-sm mb-1">Puzzle</h3>
            <p className="text-xs text-muted-foreground mb-3">A simple puzzle to help you focus.</p>
            <Button variant="outline" size="sm" disabled>Coming Soon</Button>
        </div>
      </CardContent>
    </Card>
  );
}
