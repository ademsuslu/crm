import {  Home, Inbox, Search, Settings,BriefcaseBusiness ,Users } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Logo from "./logo"
import Link from "next/link"

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
    icon: BriefcaseBusiness ,
  },
  {
    title: "Employees",
    url: "/employee",
    icon: Users,
  },
  {
    title: "Search",
    url: "/dashboard",
    icon: Search,
  },
  {
    title: "Settings",
    url: "/dashboard",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="my-2 cursor-pointer">
            <Logo/>
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-6">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem className="my-3" key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
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
  )
}
