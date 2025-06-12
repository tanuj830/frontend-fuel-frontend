"use client";
import React from 'react'
import { Menubar } from './ui/menubar'
import { Menu } from './Menu'
import { ModeToggle } from './ModeToggle'
import Link from 'next/link'
import { AlignJustify, X } from 'lucide-react'
import Logo from './Logo';
import Prepare from './Prepare';
import Products from './Products';
import UserProfile from './UserProfile';
import NavbarSheet from './HamburgerMenu';
import GetfullAccess from './GetfullAccess';

const Navbar = ({showSidebar, setShowSidebar, layout, setLayout}:any) => {
  const [showAddBar, setShowAddBar] = React.useState(true)

  
  return (
    <nav className='fixed top-0 w-screen h-20 dark:bg-background bg-white z-[100000]'>
      {
        showAddBar &&

        <div className='text-[10px] lg:text-[12px] gradient text-primary-foreground p-1 text-center flex'>
          <div className='w-full'>
          Platform is in building phase, launching soon 🔥
          </div>

          <X onClick={() => setShowAddBar(false)} className='cursor-pointer' width={16} height={16} />
        </div>
      }

  {/* mobile view */}
  <div className='border-b lg:hidden flex justify-between items-center gap-5 px-5 lg:px-10 py-2.5  text-sm '>

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
  <GetfullAccess/>
      <NavbarSheet layout={layout} setLayout={setLayout}/>
</div>
</div>


  {/* pc view */}
  <div className='hidden lg:flex  border-b  justify-between items-center gap-5 px-6 lg:px-10 py-2.5  text-sm '>

<div className='flex items-center gap-20'>

  <div className='flex items-center gap-5'>

    < div className='flex items-center gap-5'>
    {
      !showSidebar &&<button onClick={()=>setShowSidebar(true)} className='cursor-pointer'><AlignJustify/></button>
    }
    <Link href="/" className='cursor-pointer'>
      <Logo  showFull={true}/>
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
  <GetfullAccess/>
    <UserProfile/>
</div>
</div>
    </nav>
  )
}

export default Navbar
