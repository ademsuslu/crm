"use client"

import * as React from "react"
import { Roboto } from "next/font/google"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { Button } from "../ui/button"
import Link from "next/link"
import { TrendingUp } from "lucide-react"

export const description = "A multiple bar chart"

const roboto = Roboto({
    weight: ['400', '700'],
    subsets: [ 'greek',],
})

const Hero = () => {
    const chartData = [
        { month: "January", desktop: 80, mobile: 180 },
        { month: "February", desktop: 305, mobile: 200 },
        { month: "March", desktop: 237, mobile: 120 },
        { month: "April", desktop: 220, mobile: 360 },
        { month: "May", desktop: 209, mobile: 300 },
        { month: "June", desktop: 514, mobile: 500 },
    ]
    const chartConfig = {
        desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
        },
        mobile: {
            label: "Mobile",
            color: "hsl(var(--chart-2))",
        },
    } satisfies ChartConfig

    return (
        <div className="flex flex-col md:flex-row items-center justify-between mt-16">
            <div className="flex flex-col items-start z-30">
                <h1 className="text-3xl text-white uppercase mb-2">
                    Shape the Future with Your Data!
                </h1>
                <span className="text-white tracking-wide  my-1" >
                    Analyze your data to optimize your business processes and strengthen your strategic decisions.
                    <br />
                    Discover growth opportunities with meaningful charts and reports.
                </span>
                <Button asChild size="lg" className="text-lg rounded mt-3">
                    <Link href="/sign-in">👉 Start Now</Link>
                </Button>
            </div>
            <div className="flex items-center justify-between w-full md:w-96 z-30 my-3 md:my-0">
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Bar Chart - Multiple</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig}>
                            <BarChart accessibilityLayer data={chartData}>
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent indicator="dashed" />}
                                />
                                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                                <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start gap-2 text-sm">
                        <div className="flex gap-2 leading-none">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="text-muted-foreground leading-none">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default Hero
