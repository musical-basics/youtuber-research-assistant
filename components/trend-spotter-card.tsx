"use client"

import { useState, useEffect } from "react"
import { TrendingUp, TrendingDown, Minus, Flame } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"

interface TrendingTopic {
  name: string
  trend: "up" | "down" | "stable"
  growth: string
  heat: "hot" | "warm" | "cool"
}

const trendingTopics: TrendingTopic[] = [
  { name: "AI Agents", trend: "up", growth: "+127%", heat: "hot" },
  { name: "Cursor Tutorial", trend: "up", growth: "+84%", heat: "hot" },
  { name: "DeepSeek", trend: "up", growth: "+215%", heat: "hot" },
]

function SparklineChart({ trend }: { trend: "up" | "down" | "stable" }) {
  // Mock sparkline paths
  const paths = {
    up: "M0,20 L5,18 L10,19 L15,15 L20,16 L25,12 L30,10 L35,8 L40,5 L45,3 L50,2",
    down: "M0,5 L5,7 L10,6 L15,10 L20,9 L25,13 L30,15 L35,17 L40,20 L45,22 L50,23",
    stable: "M0,12 L5,13 L10,11 L15,12 L20,11 L25,13 L30,12 L35,11 L40,12 L45,11 L50,12",
  }

  const colors = {
    up: "stroke-emerald-500",
    down: "stroke-red-500",
    stable: "stroke-muted-foreground",
  }

  return (
    <svg
      viewBox="0 0 50 25"
      className="h-6 w-16"
      preserveAspectRatio="none"
    >
      <path
        d={paths[trend]}
        fill="none"
        className={colors[trend]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function TrendIcon({ trend }: { trend: "up" | "down" | "stable" }) {
  if (trend === "up") return <TrendingUp className="h-3.5 w-3.5 text-emerald-500" />
  if (trend === "down") return <TrendingDown className="h-3.5 w-3.5 text-red-500" />
  return <Minus className="h-3.5 w-3.5 text-muted-foreground" />
}

export function TrendSpotterCard() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <Card className="bg-card border-border">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <Skeleton className="h-5 w-5" />
            <Skeleton className="h-5 w-32" />
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between">
              <Skeleton className="h-4 w-24" />
              <div className="flex items-center gap-3">
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-4 w-12" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-sm font-medium text-card-foreground">
          <Flame className="h-4 w-4 text-primary" />
          Trend Spotter
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        {trendingTopics.map((topic) => (
          <div
            key={topic.name}
            className="grid grid-cols-[auto_1fr_auto_auto_auto] items-center gap-3 rounded-md px-2 py-2.5 transition-colors hover:bg-secondary/50"
          >
            <TrendIcon trend={topic.trend} />
            <span className="text-sm font-medium text-card-foreground truncate">
              {topic.name}
            </span>
            {topic.heat === "hot" ? (
              <Badge variant="secondary" className="bg-primary/10 text-primary text-xs px-1.5 py-0">
                Hot
              </Badge>
            ) : (
              <span />
            )}
            <SparklineChart trend={topic.trend} />
            <span className="text-xs font-medium text-emerald-500 w-12 text-right">
              {topic.growth}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
