"use client";
import React from 'react'
import { Menubar } from './ui/menubar'
import { Menu } from './Menu'
import { ModeToggle } from './ModeToggle'
import Link from 'next/link'
import { X } from 'lucide-react'
import { useAuth } from "@/components/AuthContext"
import Logo from './Logo';
import Prepare from './Prepare';
import Products from './Products';
import UserProfile from './UserProfile';

const Navbar = () => {
  const [showAddBar, setShowAddBar] = React.useState(true)
  const [hasMounted, setHasMounted] = React.useState(false);
  

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;
  return (
    <>
      {
        showAddBar &&

        <div className='text-[10px] lg:text-[12px] bg-primary text-primary-foreground p-1 text-center flex'>
          <div className='w-full'>

            Enjoy 20% off all plans by following our social accounts! Check it out
          </div>

          <X onClick={() => setShowAddBar(false)} className='cursor-pointer' width={16} height={16} />
        </div>
      }

  {/* mobile view */}
  <div className='bg-muted/50 lg:hidden flex justify-between items-center gap-5 px-5 lg:px-10 py-2  text-sm '>

<div className='flex items-center gap-4'>

  <div className='flex items-center gap-5'>

    < div className='flex items-center gap-1'>
    <Link href="/" className='cursor-pointer'>
      <Logo />
    </Link>
      <Products/>
    </div>
  </div>
  <div className='flex items-center gap-5'>
    <Prepare />
  </div>
</div>



<div className='flex items-center gap-3'>
  <button className='rounded-full bg-primary text-primary-foreground text-xs py-2 px-3 text-nowrap font-semibold cursor-pointer'>Get full access</button>
</div>
</div>


  {/* pc view */}
  <div className='hidden lg:flex bg-muted/50  justify-between items-center gap-5 px-6 lg:px-10 py-2  text-sm '>

<div className='flex items-center gap-20'>

  <div className='flex items-center gap-5'>

    < div className='flex items-center gap-5'>
    <Link href="/" className='cursor-pointer'>
      <Logo />
    </Link>
      <div className='border-r-2 h-6 border-muted' />
    </div>

    <div className='flex items-center gap-6'>
      <Products />
    </div>
  </div>
  <div className='flex items-center gap-5'>
    <Link href="/questions" className='text-sm hover:text-primary'>Dashboard</Link>
    <Prepare />
  </div>
</div>



<div className='flex items-center gap-3'>

  

  <ModeToggle  />
  <button className='rounded-full bg-primary text-primary-foreground text-xs py-2 px-3 font-semibold cursor-pointer'>Get full access</button>
  <UserProfile/>
</div>
</div>
    </>
  )
}

export default Navbar
