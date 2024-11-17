import type { Metadata } from 'next'
import './globals.css'
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin',"cyrillic","cyrillic-ext","greek","greek-ext","vietnamese"],
})

import { Toaster } from "@/components/ui/toaster"
export const metadata: Metadata = {
  title: 'Süslü Crm',
  description: 'Generated by Süslü',
}

import { ClerkProvider } from '@clerk/nextjs'
import { Providers } from '@/components/provider/provider'
import { ModalProvider } from '@/components/provider/modal-providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<ClerkProvider>
    <html lang="en" suppressHydrationWarning>

        <body className={`${roboto.className}`} suppressHydrationWarning>
        <Providers>
        <ModalProvider />
          {children}
          <Toaster />
        </Providers>
        </body>
    </html>
</ClerkProvider>
  )
}
