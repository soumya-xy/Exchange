"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { BookMarked, PenSquare } from "lucide-react"
import { Button } from "../ui/button";

const chartData = [
  { day: "Mon", mood: 6 },
  { day: "Tue", mood: 7 },
  { day: "Wed", mood: 5 },
  { day: "Thu", mood: 8 },
  { day: "Fri", mood: 7 },
  { day: "Sat", mood: 9 },
  { day: "Sun", mood: 8 },
]

const chartConfig = {
  mood: {
    label: "Mood",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

export function DailyDiarySection() {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
            <BookMarked className="text-primary"/>
            Daily Diary & Progress
        </CardTitle>
        <CardDescription>Reflect on your day and track your mood over time.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Mood Tracker</h3>
          <ChartContainer config={chartConfig} className="h-[150px] w-full">
            <BarChart accessibilityLayer data={chartData} margin={{ top: 20, right: 20, bottom: 0, left: -20}}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="day"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <Bar dataKey="mood" fill="var(--color-mood)" radius={8} />
            </BarChart>
          </ChartContainer>
        </div>
        <div className="flex justify-end">
            <Button>
                <PenSquare className="mr-2"/>
                Write in Diary
            </Button>
        </div>
      </CardContent>
    </Card>
  )
}
