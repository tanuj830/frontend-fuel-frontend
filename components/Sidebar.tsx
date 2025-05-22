"use client"
import Link from 'next/link'
import {  usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import { Button } from './ui/button'
import { DropdownMenu } from '@radix-ui/react-dropdown-menu'
import { Brain, LayoutDashboard, ListChecks, LucideListCollapse, Sheet } from 'lucide-react'
import { SiJavascript, SiReact } from 'react-icons/si'
import { AiOutlineJavaScript, AiOutlineNodeCollapse } from "react-icons/ai";
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import FeaturedItem from './FeaturedItem'


const Sidebar = ({layout, setLayout}:any) => {

  return (
    <div className=' fixed top-20 min-w-[20vw] max-w-[20vw] w-[20vw] h-screen'>
        <div className=' h-full  w-full flex flex-col justify-between pb-20'>
    <div>

<div className=' flex flex-col gap-1 pt-5 pr-5 pl-5'>
  <div className=''>
      <button onClick={()=>setLayout("dashboard-layout")} className={`hover:bg-muted cursor-pointer w-full text-start text-[13px] rounded-lg text-muted-foreground py-2 px-2 flex items-center gap-2
${layout === "dashboard-layout" && "bg-muted text-secondary-foreground"}`}><LayoutDashboard width={16} height={16}/> Dashboard</button>
  </div>
  <div className=''>
      <button onClick={()=>setLayout("cheatsheet-layout")} className={`hover:bg-muted cursor-pointer w-full text-start text-[13px] rounded-lg text-muted-foreground py-2 px-2 flex items-center gap-2
${layout === "cheatsheet-layout" && "bg-muted text-secondary-foreground"}`}><Sheet width={16} height={16}/> Cheatsheets</button>
  </div>
  <div className=''>
      <button onClick={()=>setLayout("questions-layout")} className={`hover:bg-muted cursor-pointer w-full text-start text-[13px] rounded-lg text-muted-foreground py-2 px-2 flex items-center gap-2
${layout === "questions-layout" && "bg-muted text-secondary-foreground"}`}><ListChecks width={16} height={16}/> All practice questions</button>
  </div>
  <div className=''>
      <button onClick={()=>setLayout("uicoding-layout")} className={`hover:bg-muted cursor-pointer w-full text-start text-[13px] rounded-lg text-muted-foreground py-2 px-2 flex items-center gap-2
${layout === "uicoding-layout" && "bg-muted text-secondary-foreground"}`}><SiReact width={16} height={16}/> UI questions</button>
  </div>
  <div className=''>
      <button onClick={()=>setLayout("algocoding-layout")} className={`hover:bg-muted cursor-pointer w-full text-start text-[13px] rounded-lg text-muted-foreground py-2 px-2 flex items-center gap-2
${layout === "algocoding-layout" && "bg-muted text-secondary-foreground"}`}><Brain width={16} height={16}/> Algorithms</button>
  </div>
  <div className=''>
      <button onClick={()=>setLayout("jscoding-layout")} className={`hover:bg-muted cursor-pointer w-full text-start text-[13px] rounded-lg text-muted-foreground py-2 px-2 flex items-center gap-2
${layout === "jscoding-layout" && "bg-muted text-secondary-foreground"}`}><AiOutlineJavaScript width={16} height={16}/> Javascript questions</button>
  </div>
</div>
</div>


{/* footer */}
<div>
<FeaturedItem/>
  {/* social links */}
  <div className='pr-2'>
  <div className='border-t p-5 flex  items-center justify-between gap-2'>
    <div className='flex  items-center gap-2'>

        <Link href="https://www.linkedin.com/company/greatreact/about" target='_blank' className='border p-2 text-sm rounded-full'><FaLinkedin/></Link>
        <Link href="https://www.instagram.com/greatreact?igsh=eGx2Y2lxdTFjMjRm&utm_source=qr" target='_blank' className='border p-2 text-sm rounded-full'><FaInstagram/></Link>
    </div>
        <Link href="#" className='border p-2 text-sm rounded-full'><AiOutlineNodeCollapse/></Link>
  </div>
  </div>
  </div>
</div>
    </div>
  )
}

export default Sidebar
