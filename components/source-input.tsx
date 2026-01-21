"use client"

import { Search, ChevronDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"

const sourceTypes = [
  { value: "youtube", label: "YouTube" },
  { value: "article", label: "Article" },
  { value: "reddit", label: "Reddit" },
]

export function SourceInput() {
  const [sourceType, setSourceType] = useState(sourceTypes[0])
  const [inputValue, setInputValue] = useState("")

  return (
    <div className="flex items-center gap-2">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Paste URL or Topic..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="pl-9 bg-secondary border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
        />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="min-w-[120px] justify-between bg-secondary border-border text-foreground hover:bg-secondary/80"
          >
            {sourceType.label}
            <ChevronDown className="ml-2 h-4 w-4 text-muted-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-popover border-border">
          {sourceTypes.map((type) => (
            <DropdownMenuItem
              key={type.value}
              onClick={() => setSourceType(type)}
              className="text-popover-foreground hover:bg-secondary focus:bg-secondary"
            >
              {type.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
        Search
      </Button>
    </div>
  )
}
