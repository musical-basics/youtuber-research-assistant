"use client"

import { useState } from "react"
import { AppSidebar, MobileMenuButton } from "@/components/app-sidebar"
import { TrendSpotterCard } from "@/components/trend-spotter-card"
import { SourceInput } from "@/components/source-input"
import { ResultsTable, type ResearchResult } from "@/components/results-table"
import { ScriptPreviewDrawer } from "@/components/script-preview-drawer"
import { NewProjectDialog } from "@/components/new-project-dialog"
import { BentoStats } from "@/components/bento-stats"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Plus, Download, Home } from "lucide-react"

export default function ResearchPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [newProjectOpen, setNewProjectOpen] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [selectedResult, setSelectedResult] = useState<ResearchResult | null>(null)

  const handleRowClick = (result: ResearchResult) => {
    setSelectedResult(result)
    setDrawerOpen(true)
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <AppSidebar
        isMobileOpen={sidebarOpen}
        onMobileClose={() => setSidebarOpen(false)}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Top Header */}
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 lg:px-6">
          <div className="flex items-center gap-4">
            <MobileMenuButton onClick={() => setSidebarOpen(true)} />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="#"
                    className="flex items-center gap-1 text-muted-foreground hover:text-foreground"
                  >
                    <Home className="h-3.5 w-3.5" />
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-muted-foreground" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-foreground font-medium">
                    Research
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex bg-transparent border-border text-foreground hover:bg-secondary"
            >
              <Download className="mr-1.5 h-3.5 w-3.5" />
              Export
            </Button>
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => setNewProjectOpen(true)}
            >
              <Plus className="mr-1.5 h-3.5 w-3.5" />
              New Project
            </Button>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-4 lg:p-6 space-y-6">
          {/* Bento Stats Grid */}
          <BentoStats />

          {/* Middle Section: Trend Spotter + Source Input */}
          <div className="grid gap-4 lg:grid-cols-3">
            <TrendSpotterCard />
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium text-foreground">
                  Add Research Source
                </h2>
              </div>
              <SourceInput />
            </div>
          </div>

          {/* Results Table */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-medium text-foreground">
                Research Results
              </h2>
              <p className="text-xs text-muted-foreground">5 items</p>
            </div>
            <ResultsTable onRowClick={handleRowClick} />
          </div>
        </div>
      </main>

      {/* Script Preview Drawer */}
      <ScriptPreviewDrawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        result={selectedResult}
      />

      {/* New Project Dialog */}
      <NewProjectDialog open={newProjectOpen} onOpenChange={setNewProjectOpen} />
    </div>
  )
}
