import { AppSidebar } from "@/components/shared/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { UserButton } from "@clerk/nextjs"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider >
      <AppSidebar />
      <main className="px-2 w-full">
        <div className="w-full p-1 flex justify-between items-center">
        <SidebarTrigger />
        <UserButton />
        </div>
        {children}
      </main>
    </SidebarProvider>
  )
}
