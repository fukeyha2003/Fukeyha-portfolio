import './globals.css'
import { Syne, Space_Mono } from 'next/font/google'


const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '700'],
})

export const metadata = {
  title: 'Fukeyha Rizwan — Portfolio',
  description: 'Computer Science student at NED University. Full-Stack Developer & AI/ML Engineer.',
  openGraph: {
    title: 'Fukeyha Rizwan — Portfolio',
    description: 'CSIT @ NED University. Full-Stack Developer & AI/ML Engineer.',
    type: 'website',
  },
}

// ✅ Correct
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${spaceMono.variable}`}>
        {children}
      </body>
    </html>
  )
}