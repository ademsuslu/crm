import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
// import { UserButton } from "@clerk/nextjs"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider >
      <main className="px-2 w-full">
        {children}
      </main>
    </SidebarProvider>
  )
}
