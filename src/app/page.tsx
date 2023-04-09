import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  
  <main>
    <br></br>
  <div className='flex justify-center text-red-500 text-4xl font-bold'>
    I AM CODER ! 
  
   </div>
    <br></br>
   <div className='flex justify-center'>
   <Image 
      src="/coder.png"
      width={500}
      height={500}
      alt="Picture of coder"
    />
    </div>
  </main>
  )
}
