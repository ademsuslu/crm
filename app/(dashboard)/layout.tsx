import { AppSidebar } from "@/components/app-sidebar"
import DashboardHeader from "@/components/shared/dashboard/dashboard-header"

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      {/* <Cards/> */}
      <SidebarInset>
      <DashboardHeader/>
        <main className="flex flex-1 flex-col gap-4 p-4">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>

  )
}
