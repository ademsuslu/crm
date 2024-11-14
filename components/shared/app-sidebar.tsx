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
    submenus: [
      { href: "/customer/reminder", label: "Reminder" },
      { href: "/customer/create", label: "Create" }
    ],
  },
  {
    title: "Business",
    url: "/business",
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

import { usePathname } from 'next/navigation';
import { useState } from "react";
import { cn } from "@/lib/utils";

export function AppSidebar() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);

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
                <div key={item.url}>
                  <SidebarMenuItem className="my-3">
                    <SidebarMenuButton asChild className="rounded" onClick={() => setActiveLink(item.url)}>
                      <Link 
                        href={item.url} 
                        className={cn({
                          "bg-secondary": pathname.slice(1) === item.url.slice(1),
                          "bg-transparent": pathname.slice(1) !== item.url.slice(1),
                        })}
                      >
                        <item.icon />
                        {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  
                  {/* Alt menüleri kontrol ediyoruz ve varsa gösteriyoruz */}
                  {item.submenus && (
                    <div className="ml-6">
                      {item.submenus.map((submenu) => (
                        <SidebarMenuItem key={submenu.href} className="my-1">
                          <SidebarMenuButton asChild>
                            <Link 
                              href={submenu.href} 
                              className={cn({
                                "bg-secondary": pathname === submenu.href,
                                "bg-transparent": pathname !== submenu.href,
                              })}
                            >
                              {submenu.label}
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
