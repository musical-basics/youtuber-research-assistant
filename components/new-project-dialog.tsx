"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FolderPlus } from "lucide-react"

interface NewProjectDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function NewProjectDialog({ open, onOpenChange }: NewProjectDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-border sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
              <FolderPlus className="h-4 w-4 text-primary" />
            </div>
            <DialogTitle className="text-card-foreground">New Research Project</DialogTitle>
          </div>
          <DialogDescription className="text-muted-foreground">
            Create a new research project to organize your content ideas.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="project-name" className="text-foreground">
              Project Name
            </Label>
            <Input
              id="project-name"
              placeholder="e.g., AI Tools Series"
              className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description" className="text-foreground">
              Description
            </Label>
            <Textarea
              id="description"
              placeholder="Brief description of your project..."
              className="bg-secondary border-border text-foreground placeholder:text-muted-foreground resize-none"
              rows={3}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="keywords" className="text-foreground">
              Keywords
            </Label>
            <Input
              id="keywords"
              placeholder="AI, tutorials, coding (comma separated)"
              className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>

        <DialogFooter className="gap-2 sm:gap-0">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="bg-secondary border-border text-foreground hover:bg-secondary/80"
          >
            Cancel
          </Button>
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => onOpenChange(false)}
          >
            Create Project
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
