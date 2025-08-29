"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { aiJournaling } from "@/ai/flows/ai-journaling";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Loader2, Send, Sparkles } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const chatSchema = z.object({
  message: z.string().min(1, { message: "Message cannot be empty." }),
});

type Message = {
  text: string;
  sender: "user" | "ai";
};

export function ChatbotSection() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const form = useForm<z.infer<typeof chatSchema>>({
    resolver: zodResolver(chatSchema),
    defaultValues: { message: "" },
  });

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
        if (viewport) {
            viewport.scrollTop = viewport.scrollHeight;
        }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const onSubmit = async (values: z.infer<typeof chatSchema>) => {
    setIsLoading(true);
    const userMessage: Message = { text: values.message, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    form.reset();

    try {
      const result = await aiJournaling({ journalEntry: values.message });
      const aiMessage: Message = { text: result.aiResponse, sender: "ai" };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (e) {
      const errorMessage: Message = {
        text: "Sorry, I'm having trouble connecting. Please try again later.",
        sender: "ai",
      };
      setMessages((prev) => [...prev, errorMessage]);
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="shadow-xl flex flex-col h-[70vh] max-h-[800px] border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Sparkles className="text-primary" />
          Your AI Companion
        </CardTitle>
        <CardDescription>
          I'm here to listen. Share what's on your mind.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-4 overflow-hidden">
        <ScrollArea className="flex-1 pr-4" ref={scrollAreaRef}>
          <div className="space-y-6">
            {messages.length === 0 && !isLoading && (
              <div className="text-center text-muted-foreground pt-16">
                <p>No messages yet. Start the conversation!</p>
              </div>
            )}
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 ${
                  message.sender === "user" ? "justify-end" : ""
                }`}
              >
                {message.sender === "ai" && (
                  <Avatar className="h-9 w-9 border-2 border-primary/50">
                    <AvatarFallback className="bg-primary/20 text-primary">
                        <Sparkles className="w-5 h-5"/>
                    </AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`rounded-xl p-3 max-w-sm md:max-w-md shadow-md ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-card"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex items-start gap-3">
                 <Avatar className="h-9 w-9 border-2 border-primary/50">
                   <AvatarFallback className="bg-primary/20 text-primary">
                        <Sparkles className="w-5 h-5"/>
                    </AvatarFallback>
                  </Avatar>
                  <div className="rounded-xl p-4 bg-card shadow-md flex items-center">
                    <Loader2 className="h-5 w-5 animate-spin text-primary"/>
                  </div>
               </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="p-4 border-t">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-2 w-full">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input placeholder="Type your message..." {...field} autoComplete="off" className="text-base" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="icon" disabled={isLoading} className="w-10 h-10">
              <Send className="h-5 w-5" />
            </Button>
          </form>
        </Form>
      </CardFooter>
    </Card>
  );
}
