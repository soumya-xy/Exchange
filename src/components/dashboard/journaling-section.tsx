"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { aiJournaling } from "@/ai/flows/ai-journaling";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2, Wand2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const journalSchema = z.object({
  entry: z.string().min(10, { message: "Your journal entry should be at least 10 characters long." }),
});

export function JournalingSection() {
  const [aiResponse, setAiResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const form = useForm<z.infer<typeof journalSchema>>({
    resolver: zodResolver(journalSchema),
    defaultValues: { entry: "" },
  });

  const onSubmit = async (values: z.infer<typeof journalSchema>) => {
    setIsLoading(true);
    setError("");
    setAiResponse("");
    try {
      const result = await aiJournaling({ journalEntry: values.entry });
      setAiResponse(result.aiResponse);
    } catch (e) {
      setError("Failed to get a response from the AI. Please try again.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="shadow-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wand2 className="text-primary" />
              AI-Powered Journal
            </CardTitle>
            <CardDescription>
              Write down your thoughts and feelings. Our AI will provide an empathetic response and wellness tips.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="entry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Journal Entry</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="How are you feeling today?"
                      className="min-h-[150px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Get Insight
            </Button>
          </CardFooter>
        </form>
      </Form>

      {(isLoading || aiResponse || error) && (
        <div className="p-6 pt-0">
          <div className="border-t pt-6">
            <h3 className="font-semibold mb-4">Your Reflection</h3>
            {isLoading && (
              <div className="space-y-2">
                <div className="h-4 w-full bg-muted animate-pulse rounded-md" />
                <div className="h-4 w-5/6 bg-muted animate-pulse rounded-md" />
                <div className="h-4 w-3/4 bg-muted animate-pulse rounded-md" />
              </div>
            )}
            {error && (
              <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {aiResponse && (
               <Alert>
                 <AlertDescription className="whitespace-pre-wrap font-body leading-relaxed">{aiResponse}</AlertDescription>
               </Alert>
            )}
          </div>
        </div>
      )}
    </Card>
  );
}
