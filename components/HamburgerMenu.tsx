import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { ArrowRight, ChevronRight, Menu, Moon, Sun, SunMoon } from 'lucide-react'
import Logo from './Logo'
import { useAuth } from './AuthContext'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import Link from 'next/link'
import Products from './Products'
import { useTheme } from 'next-themes'
  

// hamburger component for mobile devices
const NavbarSheet = () => {

  const {user} = useAuth()
  const {theme, setTheme} = useTheme()

  return (
    <div>
      <Sheet >
  <SheetTrigger><Menu/></SheetTrigger>
  <SheetContent className='h-full'>
    <SheetHeader>
      <SheetTitle className='flex items-center'>
    <Logo showFull={true}/>
    <Products/>
      </SheetTitle>
     
    </SheetHeader>
    <div className='flex flex-col justify-between h-full  pb-8'>
        {/* header */}
        <div className='px-5 pt-5'>
            {/* <h6 className='text-muted-foreground text-xs'>Quick links</h6> */}
            <div className='flex flex-col gap-5'>
              <Link href="/questions" className='text-muted-foreground '>Dashboard</Link>
              <Link href="/questions" className='text-muted-foreground '>UI questions</Link>
              <Link href="/questions" className='text-muted-foreground '>JS functions</Link>
              <Link href="/questions" className='text-muted-foreground '>DSA questions</Link>
            </div>
        </div>

        {/* footer */}
        <div>
        <img src="/discount.png" alt="" />
        <div className='py-4 px-5 bg-muted '>

{
  theme === "dark" ?
  <button onClick={()=>setTheme("light")} className='flex items-center justify-between w-full '>
  <span>Light mode</span>
  <Sun/>
</button>
:

<button  onClick={()=>setTheme("dark")}className='flex items-center justify-between w-full '>
  <span>Dark mode</span>
  <Moon/>
</button>
}
</div>
        <div className={`border-t  w-full ${user ? "px-5 pt-4" : "px-0"}`}>
       {
        user ? 
        <button className='cursor-pointer flex w-full justify-between items-center '>
        <div className='flex items-center gap-3  '>

        <Avatar>
<AvatarImage src="https://github.com/shadcn.png" />
<AvatarFallback className='uppercase pl-3 '>{user?.username.slice(0,2)}</AvatarFallback>
</Avatar>
<span className='capitalize'>{user?.username}</span>
        </div>
<span><ChevronRight/></span>

          </button>  : 
          <div className='w-full flex'>

          <Link href="/sign-in" className='cursor-pointer w-full border-b  text-start px-3 py-3'>Sign in/up</Link>
          </div>
       }
        </div>
        </div>
      </div>
  </SheetContent>
</Sheet>

    </div>
  )
}

export default NavbarSheet
