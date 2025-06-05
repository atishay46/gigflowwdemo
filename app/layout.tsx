import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gigfloww Atishay Jain',
  description: 'A modern web application',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
