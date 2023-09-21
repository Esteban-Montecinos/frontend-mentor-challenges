import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Frontend Mentor Challenges',
  description: 'App que hace un scraping a la pagina de frontend mentor',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-950 text-zinc-100`}>{children}</body>
    </html>
  )
}
