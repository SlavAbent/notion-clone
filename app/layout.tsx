import type { Metadata } from 'next'
import { Toaster } from 'sonner'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/providers/theme.provider";
import { ConvexClientProver } from "@/components/providers/convex.provider";
import { ModalProvider } from "@/components/providers/modal-provider";
import { EdgeStoreProvider } from "@/lib/edgestore";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Notion',
  description: 'The connected workspace',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: '/logo.svg',
        href: '/logo.svg',
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: '/logo-dark.svg',
        href: '/logo-dark.svg',
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProver>
          <EdgeStoreProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="notion-clone-theme"
            >
              <Toaster position="bottom-center"/>
              <ModalProvider />
              {children}
            </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexClientProver>
      </body>
    </html>
  )
}
