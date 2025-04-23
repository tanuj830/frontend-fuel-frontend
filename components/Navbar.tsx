"use client";
import React from 'react'
import { Menubar } from './ui/menubar'
import {Menu} from './Menu'
import { ModeToggle } from './ModeToggle'
import Link from 'next/link'
import { X } from 'lucide-react'
import {useAuth} from "@/components/AuthContext"

const Navbar = () => {
  const [showAddBar, setShowAddBar] = React.useState(true)
  const [hasMounted, setHasMounted] = React.useState(false);
  const {logout, user} = useAuth()

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;
  return (
    <>
    {
      showAddBar &&

    <div className='text-[10px] lg:text-xs bg-primary p-1.5 text-center flex'>
      <div className='w-full'>

    Enjoy 20% off all plans by following our social accounts! Check it out
      </div>

      <X onClick={()=>setShowAddBar(false)} className='cursor-pointer' width={16} height={16}/>
    </div>
    }
    <div className=' flex justify-end items-center gap-5 px-6 lg:px-10 py-2  text-sm border-b border-muted'>
      
      {
        user ? 
        <button className='cursor-pointer' onClick={logout}>Sign out</button>
      :  <Link className='cursor-pointer' href="/sign-up">Sign in / up</Link>
      }
      
      <ModeToggle/>
    </div>
    </>
  )
}

export default Navbar
