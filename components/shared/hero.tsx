
"use client"

import * as React from "react"
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
        <div className="flex  mt-16 flex-col md:flex-row  items-center justify-between">
            <div className="flex z-30 flex-col items-start justify-start">
                <h1 className="text-3xl  mb-2 text-white font-mono capitalize">
                    Shape the Future with Your Data!
                </h1>
                <span className="my-1 text-white font-mono leading-normal">Analyze your data to optimize your business processes and strengthen your strategic decisions. <br /> Discover growth opportunities with meaningful charts and reports.</span>
                <Button asChild  className="rounded font-mono mt-3">
                    <Link href="/sign-in">Get Started</Link>
                </Button>
            </div>
            <div className="flex  z-30 items-center my-3 md:my-0 justify-between w-full md:w-96">
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="font-mono">Bar Chart - Multiple</CardTitle>
                        <CardDescription className="font-mono">January - June 2024</CardDescription>
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
                    <CardFooter className="flex-col items-start gap-2 text-sm">
                        <div className="flex gap-2 font-mono leading-none">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="leading-none text-muted-foreground font-mono">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}



export default Hero