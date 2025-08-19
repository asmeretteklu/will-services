import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WILL - Professional Services',
  description: 'Data entry, passport services, and website development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}