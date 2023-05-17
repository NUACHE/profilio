import Head from 'next/head'
import './globals.css'
import { Montserrat } from 'next/font/google'
import Footer from './components/Footer'
import Navbar from './components/Navbar'



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
  return (
    <>
    <Head>
<meta name='viewport' content='width=device-width, initial-scale=1' />
<link rel='icon' href='/favicon.ico' />
    </Head>
    <html lang="en">
      <body className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
      <Navbar />
        {children}
        <Footer />
        </body>
    </html>
    
    </>
  )
}