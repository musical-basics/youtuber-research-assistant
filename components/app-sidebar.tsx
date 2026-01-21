"use client"

import React from "react"

import { useState } from "react"
import {
  LayoutDashboard,
  Search,
  FileText,
  ImageIcon,
  Settings,
  Key,
  LogOut,
  Menu,
  X,
  Sparkles,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface NavItem {
  label: string
  icon: React.ElementType
  href: string
  active?: boolean
}

const mainNavItems: NavItem[] = [
  { label: "Dashboard", icon: LayoutDashboard, href: "#" },
  { label: "Research", icon: Search, href: "#", active: true },
  { label: "Scripting", icon: FileText, href: "#" },
  { label: "Thumbnails", icon: ImageIcon, href: "#" },
]

const bottomNavItems: NavItem[] = [
  { label: "Settings", icon: Settings, href: "#" },
  { label: "API Keys", icon: Key, href: "#" },
]

interface AppSidebarProps {
  onMobileClose?: () => void
  isMobileOpen?: boolean
}

export function AppSidebar({ onMobileClose, isMobileOpen }: AppSidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={onMobileClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 flex h-full w-64 flex-col border-r border-border bg-sidebar transition-transform duration-300 lg:relative lg:translate-x-0",
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex h-14 items-center justify-between border-b border-border px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-base font-semibold text-sidebar-foreground">
              VibeStudio
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-sidebar-foreground"
            onClick={onMobileClose}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* User Profile */}
        <div className="border-b border-border p-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9">
              <AvatarImage src="https://avatar.vercel.sh/creator" alt="User" />
              <AvatarFallback className="bg-secondary text-secondary-foreground">JD</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-sidebar-foreground">
                Jake Doe
              </span>
              <span className="text-xs text-muted-foreground">Pro Plan</span>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 space-y-1 p-2">
          {mainNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                item.active
                  ? "bg-sidebar-accent text-primary"
                  : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </a>
          ))}
        </nav>

        {/* Bottom Navigation */}
        <div className="border-t border-border p-2">
          {bottomNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground"
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </a>
          ))}
          <button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-destructive">
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </aside>
    </>
  )
}

export function MobileMenuButton({ onClick }: { onClick: () => void }) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="lg:hidden text-foreground"
      onClick={onClick}
    >
      <Menu className="h-5 w-5" />
    </Button>
  )
}
