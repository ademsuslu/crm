"use client"
import { Home, Inbox, Briefcase, Settings, Users } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Logo from "./logo";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Customer",
    url: "/customer",
    icon: Inbox,
  },
  {
    title: "Bussines",
    url: "/bussines",
    icon: Briefcase,
  },
  {
    title: "Employees",
    url: "/employee",
    icon: Users,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

import { usePathname } from 'next/navigation'
import { useState } from "react";
import { cn } from "@/lib/utils";

export function AppSidebar() {
  const pathname = usePathname()
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="my-2 cursor-pointer">
            <Logo />
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-6">
            <SidebarMenu>
              {/* create active link for items */}
              {items.map((item) => {
                const [activeLink, setActiveLink] = useState("dashboard")
                return <SidebarMenuItem key={item.url}  onClick={() => setActiveLink(item.url)} className="my-3">
                  <SidebarMenuButton asChild >
                    <Link href={item.url} className={cn(`${pathname.slice(1) === activeLink ? "bg-transparent" : "bg-red-500"}`)}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}