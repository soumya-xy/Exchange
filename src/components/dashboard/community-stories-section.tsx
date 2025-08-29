"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, MessageSquare, BookOpen } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";

const stories = [
    {
        author: "Aakash",
        avatar: "https://picsum.photos/40/40?random=1",
        title: "It's Okay to Feel Lost Sometimes",
        preview: "Finding the courage to talk about my anxiety was the first step. For the longest time, I thought I was the only one feeling this pressure...",
        tags: ["Exam Stress", "Anxiety"],
        likes: 12,
    },
    {
        author: "Priya",
        avatar: "https://picsum.photos/40/40?random=2",
        title: "You Are Not Alone",
        preview: "I felt so alone during my first year of college. The workload, being away from home... reading stories here made me realize I wasn't...",
        tags: ["Relationships", "College Life"],
        likes: 25,
    },
     {
        author: "Rohan",
        avatar: "https://picsum.photos/40/40?random=3",
        title: "A Journey to Self-Kindness",
        preview: "It's okay to not be okay. I used to be so hard on myself for every little mistake. Learning to be kind to myself has been a journey, not a destination...",
        tags: ["Self-Esteem"],
        likes: 38,
    },
    {
        author: "Sneha",
        avatar: "https://picsum.photos/40/40?random=4",
        title: "Sharing My Own Story",
        preview: "Reading all the anonymous stories here gave me the strength to finally pen down my own. We are all in this together, and our experiences connect us...",
        tags: ["Community", "Career Pressure"],
        likes: 19,
    }
]

const filters = ["All", "Exam Stress", "Relationships", "Career Pressure", "Anxiety", "Self-Esteem"];

export function CommunityStoriesSection() {
  return (
    <Card className="shadow-none border-none bg-transparent">
        <CardHeader>
            <CardTitle className="text-2xl font-bold">Community Stories</CardTitle>
            <CardDescription>Read anonymous, real experiences from your peers. You are not alone.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex flex-wrap gap-2 mb-6">
                {filters.map(filter => (
                    <Button key={filter} variant={filter === 'All' ? 'default' : 'outline'}>
                        {filter}
                    </Button>
                ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stories.map((item, index) => (
                    <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                        <CardHeader>
                            <div className="flex items-center gap-3 mb-3">
                                <Avatar className="h-10 w-10 border-2 border-primary/50">
                                    <AvatarImage src={item.avatar} alt={item.author} data-ai-hint="person"/>
                                    <AvatarFallback>{item.author.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold">{item.author}</p>
                                    <p className="text-xs text-muted-foreground">Shared anonymously</p>
                                </div>
                            </div>
                            <CardTitle className="text-lg leading-snug">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <p className="text-sm text-muted-foreground mb-4">{item.preview}</p>
                            <div className="flex flex-wrap gap-2">
                                {item.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                            </div>
                        </CardContent>
                        <CardContent className="flex items-center justify-between border-t pt-4">
                           <Button variant="ghost" size="sm" className="text-muted-foreground">
                                <BookOpen className="mr-2 h-4 w-4"/> Read More
                           </Button>
                           <Button variant="ghost" size="sm" className="flex items-center gap-2 text-muted-foreground">
                                <Heart className="h-5 w-5 hover:fill-red-500 hover:text-red-500 transition-colors"/>
                                <span className="font-semibold">{item.likes}</span>
                           </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
             <div className="text-center mt-8">
                <Button variant="outline">Load More Stories</Button>
            </div>
        </CardContent>
    </Card>
  );
}
