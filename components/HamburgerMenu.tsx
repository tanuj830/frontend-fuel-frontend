"use client"
import React, { useEffect } from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ArrowRight, Brain, ChevronRight, Flame, LayoutDashboard, ListChecks, Menu, Moon, Sun, SunMoon } from 'lucide-react'
import Logo from './Logo'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import Link from 'next/link'
import Products from './Products'
import { useTheme } from 'next-themes'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'
import { SiReact } from 'react-icons/si'
import { AiOutlineJavaScript } from 'react-icons/ai'
import FeaturedItem from './FeaturedItem'


// hamburger component for mobile devices
const NavbarSheet = ({layout, setLayout}:any) => {

const [supabaseUser, setSupabaseUser] = React.useState({} as any)

useEffect(()=>{

  supabase.auth.getUser().then(res=>setSupabaseUser(res.data.user));
},[])


  const { theme, setTheme } = useTheme()

  const router = useRouter()
  const logout = () => {
    const { error }:any =  supabase.auth.signOut();
    if(error)return <small>Something went wrong...</small>
    router.push("/sign-in")
  }
  return (
    <div>
      <Sheet>
        <SheetTrigger><Menu /></SheetTrigger>
        <SheetContent className='h-full z-[1000]'>
          <SheetHeader>
            <SheetTitle className='flex items-center'>
              <Logo showFull={true} />
              <Products />
            </SheetTitle>

          </SheetHeader>
          <div className='flex flex-col justify-between h-full  pb-4'>
            {/* header */}
            <div className='px-3 mt-2'>
              {/* <h6 className='text-muted-foreground text-xs'>Quick links</h6> */}
              <div className=''>

<div className=' flex flex-col gap-1 '>
  <div className=''>
      <button onClick={()=>{
        router.push("/questions");
        setLayout("dashboard-layout");
      }}
       className={`hover:bg-muted cursor-pointer w-full text-start text-[13px] rounded-lg text-muted-foreground py-2 px-2 flex items-center gap-2
${layout === "dashboard-layout" && "bg-muted text-secondary-foreground"}`}><LayoutDashboard width={16} height={16}/> Dashboard</button>
  </div>
  <div className=''>
      <button onClick={()=>{
        router.push("/questions");
        setLayout("questions-layout");
      }}
       className={`hover:bg-muted cursor-pointer w-full text-start text-[13px] rounded-lg text-muted-foreground py-2 px-2 flex items-center gap-2
${layout === "questions-layout" && "bg-muted text-secondary-foreground"}`}><ListChecks width={16} height={16}/> All practice questions</button>
  </div>
  <div className=''>
      <button onClick={()=>{
        router.push("/questions");
        setLayout("uicoding-layout");
      }}
       className={`hover:bg-muted cursor-pointer w-full text-start text-[13px] rounded-lg text-muted-foreground py-2 px-2 flex items-center gap-2
${layout === "uicoding-layout" && "bg-muted text-secondary-foreground"}`}><SiReact width={16} height={16}/> UI questions</button>
  </div>
  <div className=''>
      <button onClick={()=>{
        router.push("/questions");
        setLayout("algocoding-layout");
      }}
       className={`hover:bg-muted cursor-pointer w-full text-start text-[13px] rounded-lg text-muted-foreground py-2 px-2 flex items-center gap-2
${layout === "algocoding-layout" && "bg-muted text-secondary-foreground"}`}><Brain width={16} height={16}/> Algorithms</button>
  </div>
  <div className=''>
      <button onClick={()=>{
        router.push("/questions");
        setLayout("jscoding-layout");
      }}
       className={`hover:bg-muted cursor-pointer w-full text-start text-[13px] rounded-lg text-muted-foreground py-2 px-2 flex items-center gap-2
${layout === "jscoding-layout" && "bg-muted text-secondary-foreground"}`}><AiOutlineJavaScript width={16} height={16}/> Javascript questions</button>
  </div>
</div>

  </div>
            </div>

            {/* footer */}
            <div>
            <FeaturedItem/>
              <div className='py-3 px-5 bg-gradient-to-r from-muted to-[rgb(24, 24, 27)] border dark:border-muted text-xs'>

                {
                  theme === "dark" ?
                    <button onClick={() => setTheme("light")} className='flex items-center justify-between w-full '>
                      <span>Light mode</span>
                      <Sun width={14} height={14}/>
                    </button>
                    :

                    <button onClick={() => setTheme("dark")} className='flex items-center justify-between w-full '>
                      <span>Dark mode</span>
                      <Moon width={14} height={14}/>
                    </button>
                }
              </div>
              <div className={`border-t  w-full text-xs ${supabaseUser ? "px-5 pt-3" : "px-0"}`}>
                {
                  supabaseUser ?
                    <>
                    <Link href="/profile" className='cursor-pointer flex w-full justify-between items-center '>
                      <div className='flex items-center gap-3  '>

                        <Avatar>
                          <AvatarImage src={supabaseUser?.user_metadata?.avatar_url} />
                          <AvatarFallback className='uppercase pl-3 '>{supabaseUser?.user_metadata?.full_name && supabaseUser?.user_metadata?.full_name.slice(0, 2)}</AvatarFallback>
                        </Avatar>
                        <span className='capitalize'>{supabaseUser?.user_metadata?.full_name}</span>
                      </div>
                      <span><ChevronRight /></span>

                    </Link> 
                    {/* <button onClick={logout} className='cursor-pointer w-full border-b  text-start px-3 py-3'>Sign out</button> */}
                    </>:
                    <div className='w-full flex'>

                      <Link href="/sign-in" className='cursor-pointer w-full bg-gradient-to-r from-muted to-[rgb(24, 24, 27)] border dark:border-muted text-start px-3 py-3'>Sign in/up</Link>
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

// import React from 'react'

// const HamburgerMenu = () => {
//   return (
//     <div>s
      
//     </div>
//   )
// }

// export default HamburgerMenu
