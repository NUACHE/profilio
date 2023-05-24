'use client'

import Head from 'next/head'
import './globals.css'
import { Montserrat } from 'next/font/google'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Script from 'next/script'
import { AnimatePresence } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'



const montserrat = Montserrat({ subsets: ['latin'], 
variable: "--font-mont"
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const router = usePathname();
  return (
    <>
    <Head>
<meta name='viewport' content='width=device-width, initial-scale=1' />
<link rel='icon' href='/favicon.ico' />
    </Head>
    <html lang="en">
      <body className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
      <Navbar />
      <AnimatePresence mode='wait' />
      <div key={router}>
        {children}
        </div>
        <Footer />
        <Script id='theme-switcher' strategy='beforeInteractive'>
          {`if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
`}
        </Script>
        </body>
    </html>
    
    </>
  )
}
