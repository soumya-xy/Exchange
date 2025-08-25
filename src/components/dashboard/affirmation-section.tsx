"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { generateAffirmation } from "@/ai/flows/affirmation-generation";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2, Sparkles } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const affirmationSchema = z.object({
  needs: z.string().min(5, { message: "Please describe your needs in at least 5 characters." }),
});

export function AffirmationSection() {
  const [affirmation, setAffirmation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const form = useForm<z.infer<typeof affirmationSchema>>({
    resolver: zodResolver(affirmationSchema),
    defaultValues: { needs: "" },
  });

  const onSubmit = async (values: z.infer<typeof affirmationSchema>) => {
    setIsLoading(true);
    setError("");
    setAffirmation("");
    try {
      const result = await generateAffirmation({ needsAndGoals: values.needs });
      setAffirmation(result.affirmation);
    } catch (e) {
      setError("Failed to generate an affirmation. Please try again.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="shadow-lg flex flex-col">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col flex-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="text-primary" />
              Daily Affirmation
            </CardTitle>
            <CardDescription>
              Generate a personal affirmation to start your day with positivity.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <FormField
              control={form.control}
              name="needs"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What do you want to focus on?</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., confidence, peace, success" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Generate
            </Button>
          </CardFooter>
        </form>
      </Form>
      {(affirmation || error) && (
        <div className="p-6 pt-0">
          <div className="border-t pt-6">
            {error && (
              <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {affirmation && (
              <blockquote className="border-l-4 border-primary pl-4 italic text-lg">
                {affirmation}
              </blockquote>
            )}
          </div>
        </div>
      )}
    </Card>
  );
}
