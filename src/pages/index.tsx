import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar'
import HeroComponent from '../components/hero'
import Intro from '../components/intro'
import StorageComponent from '../components/storage'
import Footer from '../components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
    >
      <Navbar/>
      <div className=' pt-[6rem]'>
      <HeroComponent/>
      </div>
      <Intro/>
      <StorageComponent/>
      <Footer/>

    </main>
  )
}
