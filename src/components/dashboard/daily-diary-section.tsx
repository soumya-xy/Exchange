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
}

export function DailyDiarySection() {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="space-y-1">
            <CardTitle className="text-lg">
                Daily Diary & Progress
            </CardTitle>
            <CardDescription>Track your mood over time.</CardDescription>
        </div>
        <div className="p-3 bg-primary/10 rounded-lg">
            <BookMarked className="w-6 h-6 text-primary"/>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <ChartContainer config={chartConfig} className="h-[120px] w-full">
            <BarChart accessibilityLayer data={chartData} margin={{ top: 20, right: 0, bottom: 0, left: -20}}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
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
                content={<ChartTooltipContent indicator="dot" hideLabel />}
              />
              <Bar dataKey="mood" fill="var(--color-mood)" radius={5} />
            </BarChart>
          </ChartContainer>
        <Button className="w-full">
            <PenSquare className="mr-2 h-4 w-4"/>
            Write in Diary
        </Button>
      </CardContent>
    </Card>
  )
}
