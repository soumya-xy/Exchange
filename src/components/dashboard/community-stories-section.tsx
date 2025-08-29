"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ScrollArea } from "../ui/scroll-area";

const stories = [
    {
        author: "Aakash",
        avatar: "https://picsum.photos/40/40?random=1",
        story: "Finding the courage to talk about my anxiety was the first step. It gets better.",
    },
    {
        author: "Priya",
        avatar: "https://picsum.photos/40/40?random=2",
        story: "I felt so alone during my exams. This community made me realize I wasn't.",
    },
     {
        author: "Rohan",
        avatar: "https://picsum.photos/40/40?random=3",
        story: "It's okay to not be okay. Learning to be kind to myself has been a journey.",
    },
    {
        author: "Sneha",
        avatar: "https://picsum.photos/40/40?random=4",
        story: "Reading stories here gave me the strength to share my own. We are in this together.",
    }
]

export function CommunityStoriesSection() {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
       <CardHeader className="flex flex-row items-center justify-between">
        <div className="space-y-1">
            <CardTitle className="text-lg">
                Community Stories
            </CardTitle>
            <CardDescription>You are not alone.</CardDescription>
        </div>
         <div className="p-3 bg-primary/10 rounded-lg">
            <Users className="w-6 h-6 text-primary"/>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <ScrollArea className="h-[200px] pr-3">
            <div className="space-y-4">
                {stories.map((item, index) => (
                    <div key={index} className="p-3 rounded-lg bg-muted/50 transition-colors hover:bg-muted/90">
                        <div className="flex items-center gap-3 mb-2">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src={item.avatar} alt={item.author} data-ai-hint="person"/>
                                <AvatarFallback>{item.author.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <p className="font-semibold text-sm">{item.author}</p>
                        </div>
                        <blockquote className="border-l-2 border-accent pl-3 text-sm italic text-muted-foreground">
                            "{item.story}"
                        </blockquote>
                    </div>
                ))}
            </div>
        </ScrollArea>
        <Button variant="outline" className="w-full">Read More Stories</Button>
      </CardContent>
    </Card>
  );
}
