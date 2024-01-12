import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import '@/styles/global.css'

const jetbrains = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'gabrielmzl.dev - Blog de um desenvolvedor frontend',
  description: 'Blog com artigos sobre desenvolvimento, na maior parte do tempo.',
  openGraph: {
    type: 'website',
    title: 'gabrielmzl.dev - Blog de um desenvolvedor frontend',
    description:
      'Blog com artigos sobre desenvolvimento, na maior parte do tempo.',
    url: 'https://gabrielmzl.dev',
  },
  twitter: {
    title: 'gabrielmzl.dev - Blog de um desenvolvedor frontend',
    description:
      'Blog com artigos sobre desenvolvimento, na maior parte do tempo.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={jetbrains.className}>
        {children}
      </body>
    </html>
  )
}
