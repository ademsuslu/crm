"use client"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Fragment } from "react"

const DashboardHeader = () => {
    const path = usePathname()
    const pathNames = path.split("/").filter(path => path)


    return (
        <div>
            <header className="flex  top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                    <BreadcrumbList>
                        {
                            pathNames.map((link, index) => {
                                const hrefs = `/${pathNames.slice(0, index + 1).join('/')}`;
                                const linkName = link[0].toLocaleUpperCase() + link.slice(1, link.length)
                                const isLastPath = pathNames.length === index + 1;
                                return (
                                    <Fragment key={index}>
                                        <BreadcrumbItem className=" md:block">
                                            {
                                                isLastPath ?
                                                    <BreadcrumbLink asChild>
                                                        <Link href={hrefs}>
                                                            {linkName}
                                                        </Link>
                                                    </BreadcrumbLink> : <BreadcrumbPage>
                                                    <Link href={hrefs}>
                                                            {linkName}
                                                        </Link>
                                                    </BreadcrumbPage>
                                            }
                                        </BreadcrumbItem>
                                        {pathNames.length !== index + 1 &&   <BreadcrumbSeparator  />}
                                    </Fragment>
                                )

                            })

                        }
                        {/* <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>*/}
                    </BreadcrumbList>
                </Breadcrumb>
            </header>
        </div>
    )
}

export default DashboardHeader