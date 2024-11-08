import { AppSidebar } from "@/components/shared/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider >
      <AppSidebar />
      <main className="px-2 w-full">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
