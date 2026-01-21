"use client"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Copy, Download, Clock, FileText } from "lucide-react"
import type { ResearchResult } from "@/components/results-table"

interface ScriptPreviewDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  result: ResearchResult | null
}

const mockScriptContent = `
[HOOK - 0:00]
"Did you know that AI agents are about to change everything about how we build software? In this video, I'll show you exactly how to build your own AI agent from scratch."

[INTRO - 0:15]
"Hey everyone, welcome back to the channel. Today we're diving deep into AI agents - what they are, why they matter, and most importantly, how you can start building them today."

[SECTION 1 - What are AI Agents? - 0:45]
"So what exactly is an AI agent? Think of it as an AI that can take actions on its own. Unlike a chatbot that just responds to your questions, an agent can browse the web, write code, send emails, and even manage your calendar..."

[SECTION 2 - Building Your First Agent - 3:00]
"Now let's get practical. I'm going to show you how to build a simple AI agent using Claude and some basic tools. First, we need to set up our environment..."

[SECTION 3 - Advanced Patterns - 8:00]
"Once you've got the basics down, there are some really powerful patterns you can use. Things like tool chaining, memory systems, and multi-agent architectures..."

[CTA - 12:00]
"If you found this helpful, make sure to smash that like button and subscribe for more AI tutorials. Drop a comment below telling me what kind of agent you want to build next!"
`.trim()

export function ScriptPreviewDrawer({
  open,
  onOpenChange,
  result,
}: ScriptPreviewDrawerProps) {
  if (!result) return null

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg bg-card border-border overflow-y-auto">
        <SheetHeader className="space-y-3">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              Generated
            </Badge>
            <Badge variant="secondary" className="bg-secondary text-muted-foreground">
              <Clock className="mr-1 h-3 w-3" />
              ~12 min read
            </Badge>
          </div>
          <SheetTitle className="text-lg text-card-foreground text-left leading-tight">
            {result.title}
          </SheetTitle>
          <SheetDescription className="text-muted-foreground text-left">
            AI-generated script based on research analysis
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-4">
          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 bg-secondary border-border text-foreground hover:bg-secondary/80"
              onClick={() => navigator.clipboard.writeText(mockScriptContent)}
            >
              <Copy className="mr-1.5 h-3.5 w-3.5" />
              Copy
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex-1 bg-secondary border-border text-foreground hover:bg-secondary/80"
            >
              <Download className="mr-1.5 h-3.5 w-3.5" />
              Export
            </Button>
          </div>

          {/* Script Content */}
          <div className="rounded-lg border border-border bg-secondary/50 p-4">
            <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border">
              <FileText className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Script Preview</span>
            </div>
            <pre className="text-sm text-muted-foreground whitespace-pre-wrap font-sans leading-relaxed">
              {mockScriptContent}
            </pre>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-lg border border-border bg-secondary/50 p-3 text-center">
              <p className="text-lg font-semibold text-foreground">487</p>
              <p className="text-xs text-muted-foreground">Words</p>
            </div>
            <div className="rounded-lg border border-border bg-secondary/50 p-3 text-center">
              <p className="text-lg font-semibold text-foreground">6</p>
              <p className="text-xs text-muted-foreground">Sections</p>
            </div>
            <div className="rounded-lg border border-border bg-secondary/50 p-3 text-center">
              <p className="text-lg font-semibold text-foreground">92%</p>
              <p className="text-xs text-muted-foreground">Quality</p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
