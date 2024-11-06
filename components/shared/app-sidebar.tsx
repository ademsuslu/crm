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
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname); // Başlangıçta aktif link olarak pathname'i alıyoruz

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="my-2 cursor-pointer">
            <Logo />
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-6">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.url} className="my-3">
                    <SidebarMenuButton asChild onClick={() => setActiveLink(item.url)}>
                        <Link 
                            href={item.url} 
                            className={cn({
                                "bg-secondary": pathname.slice(1) === item.url.slice(1),
                                "bg-transparent": pathname.slice(1) !== item.url.slice(1),
                            })}
                        >
                            <item.icon />
                            <span>{item.title}</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}