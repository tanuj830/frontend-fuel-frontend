// app/layout.tsx
import Navbar from '@/components/Navbar';
import UserDetails from '@/components/profile/UserDetails';
import { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ReactNode } from 'react'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ReactReady | Profile",
  description: "Ace your next frontend interview",
};


export default function ProfileLayout({ children }: { children: ReactNode }) {
  return (
        <main className="">
          <Navbar/>
          <div className='flex  justify-center w-full'>
            <div className='lg:w-[79vw] w-full flex flex-col lg:flex-row'>
              <div className='relative lg:w-[40%] border-r border-l'>
              <UserDetails/>
              </div>
              <div className='border-r w-full'>

          {children}
              </div>
            </div>
          </div>
          </main>
  )
}
