"use client"

import React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { FileText, TrendingUp, Clock, Zap } from "lucide-react"

interface StatCard {
  label: string
  value: string
  change?: string
  icon: React.ElementType
  accent?: boolean
}

const stats: StatCard[] = [
  {
    label: "Total Research",
    value: "127",
    change: "+12 this week",
    icon: FileText,
  },
  {
    label: "Scripts Generated",
    value: "43",
    change: "+5 today",
    icon: Zap,
    accent: true,
  },
  {
    label: "Avg. Vibe Score",
    value: "8.4",
    change: "+0.3 vs last month",
    icon: TrendingUp,
  },
  {
    label: "Hours Saved",
    value: "86h",
    change: "This month",
    icon: Clock,
  },
]

export function BentoStats() {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card
          key={stat.label}
          className={`bg-card border-border ${
            stat.accent ? "ring-1 ring-primary/20" : ""
          }`}
        >
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-semibold text-card-foreground">
                  {stat.value}
                </p>
                {stat.change && (
                  <p className="text-xs text-muted-foreground">{stat.change}</p>
                )}
              </div>
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                  stat.accent
                    ? "bg-primary/10 text-primary"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                <stat.icon className="h-4 w-4" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
