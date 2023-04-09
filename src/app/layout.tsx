import './globals.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Image from 'next/image'
export const metadata = {
  title: 'Create Next App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  
    <html lang="en">
    <body>
      <Header />{children} <Footer/>
      </body>
    </html>
  )
}
