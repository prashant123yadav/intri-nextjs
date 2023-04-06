import Image from 'next/image'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  
  <main>
  <div className='flex justify-center text-red-500 text-4xl font-bold'>
    I AM CODER ! 
  
   </div>
   <div className=''>
   <Image src="/coder.jpg" alt="" width="50" height="300" />
   </div>
      
  </main>
  )
}
