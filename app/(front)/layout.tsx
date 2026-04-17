import type { Metadata } from 'next'
import { Inter, Open_Sans } from 'next/font/google'
import '../css/globals.css'
import '../css/colors.css'
import '../css/shadows.css'
import '../css/typography.css'

import { cn } from '@/lib/utils'
import Header from '@/components/features/header'
import Footer from '@/components/features/footer'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
})

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin', 'cyrillic'],
})

export const metadata: Metadata = {
  title: 'Quotes Freed',
  description: 'App for the open minds. Create, Compose, Read',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn(
        'antialiased',
        'font-sans-body',
        'typo-body-md text-grey-700',
        openSans.variable,
        inter.variable
      )}
    >
      <body className="min-h-screen flex flex-col header-top-padding">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
