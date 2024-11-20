import * as React from "react"
import { SearchForm } from "@/components/search-form"
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

import { RxDotFilled } from "react-icons/rx";
import { ChevronRightIcon } from "@radix-ui/react-icons"

import Logo from "./shared/logo"
import Link from "next/link"

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
   
    {
      title: "Home",
      url: "/dashboard",
      // items: [
      //   {
      //     title: "Routing",
      //     url: "#",
      //   },
      //   {
      //     title: "Data Fetching",
      //     url: "#",
      //     isActive: true,
      //   },
      //   {
      //     title: "Rendering",
      //     url: "#",
      //   },
      //   {
      //     title: "Caching",
      //     url: "#",
      //   },
      //   {
      //     title: "Styling",
      //     url: "#",
      //   },
      //   {
      //     title: "Optimizing",
      //     url: "#",
      //   },
      //   {
      //     title: "Configuring",
      //     url: "#",
      //   },
      //   {
      //     title: "Testing",
      //     url: "#",
      //   },
      //   {
      //     title: "Authentication",
      //     url: "#",
      //   },
      //   {
      //     title: "Deploying",
      //     url: "#",
      //   },
      //   {
      //     title: "Upgrading",
      //     url: "#",
      //   },
      //   {
      //     title: "Examples",
      //     url: "#",
      //   },
      // ],
    },
    {
      title: "Customers",
      url: "/customer",
      items: [
        {
          title: "Reminders",
          url: "/customer/reminder",
          isActive:false
        },
        {
          title: "Create",
          url: "/customer/create",
          isActive:false
        },
      
      ],
    },
    {
      title: "Bussines",
      url: "/bussines",
      items: [
         {
           title: "Personal",
           url: "/personal",
           isActive:false
         },
      //   {
      //     title: "Fast Refresh",
      //     url: "#",
      //   },
      //   {
      //     title: "Next.js Compiler",
      //     url: "#",
      //   },
      //   {
      //     title: "Supported Browsers",
      //     url: "#",
      //   },
      //   {
      //     title: "Turbopack",
      //     url: "#",
      //   },
       ],
    },
    {
      title: "Opportunity",
      url: "/opportunity",
      // items: [
      //   {
      //     title: "Accessibility",
      //     url: "#",
      //   },
      //   {
      //     title: "Fast Refresh",
      //     url: "#",
      //   },
      //   {
      //     title: "Next.js Compiler",
      //     url: "#",
      //   },
      //   {
      //     title: "Supported Browsers",
      //     url: "#",
      //   },
      //   {
      //     title: "Turbopack",
      //     url: "#",
      //   },
      // ],
    },
    {
      title: "Employees",
      url: "/employee",
      // items: [
      //   {
      //     title: "Contribution Guide",
      //     url: "#",
      //   },
      // ],
    },
      
      {
       title: "Settings",
       url: "/settings",
      //  items: [
      //    {
      //      title: "Installation",
      //      url: "#",
      //    },
      //    {
      //      title: "Project Structure",
      //      url: "#",
      //    },
      //  ],
     },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        {/* <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        <SearchForm /> */}
        <Link href={"/dashboard"}>
          <Logo/>
        </Link>
      </SidebarHeader>
      <SidebarContent className="gap-0">
        {/* We create a collapsible SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <Collapsible
            key={item.title}
            title={item.title}
            defaultOpen={false}
            className="group/collapsible"
          >
            <SidebarGroup>
              <SidebarGroupLabel
                asChild
                className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                <CollapsibleTrigger>
                 <Link href={item.url}>
                  {item.title}
                 </Link>
                  <ChevronRightIcon className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {item?.items?.map((item) => {
                  
                      return   <SidebarMenuItem className="ms-3" key={item.title}>
                      <SidebarMenuButton asChild isActive={item?.isActive}>
                      <Link href={item.url} className="flex gap-2">
                      <RxDotFilled />
                      {item.title}</Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    }
                   )}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
