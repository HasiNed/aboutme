import '@/styles/globals.css'
import '@/styles/markdown.css'

export const metadata = {
  title: 'About Yunqin Zhu',
  icons: {
    icon: '/favicon.ico',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
