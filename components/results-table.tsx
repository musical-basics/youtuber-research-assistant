"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Youtube, FileText, MessageSquare, Sparkles } from "lucide-react"

interface ResearchResult {
  id: string
  title: string
  source: "youtube" | "article" | "reddit"
  vibeScore: "High" | "Medium" | "Low"
  status: "Ready" | "Processing"
}

const mockResults: ResearchResult[] = [
  {
    id: "1",
    title: "How to Build AI Agents with Claude - Complete Guide 2025",
    source: "youtube",
    vibeScore: "High",
    status: "Ready",
  },
  {
    id: "2",
    title: "Cursor AI vs GitHub Copilot: Which is Better for Coding?",
    source: "youtube",
    vibeScore: "High",
    status: "Ready",
  },
  {
    id: "3",
    title: "DeepSeek R1 Explained: The Open Source AI Revolution",
    source: "article",
    vibeScore: "High",
    status: "Ready",
  },
  {
    id: "4",
    title: "Why Every Developer Should Learn AI Agents in 2025",
    source: "reddit",
    vibeScore: "Medium",
    status: "Processing",
  },
  {
    id: "5",
    title: "The Future of Software Development with AI Tools",
    source: "article",
    vibeScore: "Medium",
    status: "Ready",
  },
]

function SourceIcon({ source }: { source: ResearchResult["source"] }) {
  if (source === "youtube") return <Youtube className="h-4 w-4 text-red-500" />
  if (source === "article") return <FileText className="h-4 w-4 text-blue-400" />
  return <MessageSquare className="h-4 w-4 text-orange-500" />
}

function VibeScoreBadge({ score }: { score: ResearchResult["vibeScore"] }) {
  const variants = {
    High: "bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20",
    Medium: "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20",
    Low: "bg-red-500/10 text-red-500 hover:bg-red-500/20",
  }

  return (
    <Badge variant="secondary" className={variants[score]}>
      {score}
    </Badge>
  )
}

function StatusBadge({ status }: { status: ResearchResult["status"] }) {
  if (status === "Ready") {
    return (
      <Badge variant="secondary" className="bg-primary/10 text-primary">
        Ready
      </Badge>
    )
  }
  return (
    <Badge variant="secondary" className="bg-secondary text-muted-foreground">
      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse inline-block" />
      Processing
    </Badge>
  )
}

interface ResultsTableProps {
  onRowClick: (result: ResearchResult) => void
}

export function ResultsTable({ onRowClick }: ResultsTableProps) {
  return (
    <div className="rounded-lg border border-border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent border-border">
            <TableHead className="text-muted-foreground font-medium">Title</TableHead>
            <TableHead className="text-muted-foreground font-medium w-[100px]">Source</TableHead>
            <TableHead className="text-muted-foreground font-medium w-[100px]">Vibe Score</TableHead>
            <TableHead className="text-muted-foreground font-medium w-[120px]">Status</TableHead>
            <TableHead className="text-muted-foreground font-medium w-[150px]">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockResults.map((result) => (
            <TableRow
              key={result.id}
              className="border-border cursor-pointer transition-colors hover:bg-secondary/50"
              onClick={() => onRowClick(result)}
            >
              <TableCell className="font-medium text-foreground max-w-[400px] truncate">
                {result.title}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <SourceIcon source={result.source} />
                  <span className="text-muted-foreground capitalize text-sm">
                    {result.source}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <VibeScoreBadge score={result.vibeScore} />
              </TableCell>
              <TableCell>
                <StatusBadge status={result.status} />
              </TableCell>
              <TableCell>
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={result.status === "Processing"}
                  onClick={(e) => {
                    e.stopPropagation()
                    onRowClick(result)
                  }}
                >
                  <Sparkles className="mr-1.5 h-3.5 w-3.5" />
                  Generate Script
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export type { ResearchResult }
