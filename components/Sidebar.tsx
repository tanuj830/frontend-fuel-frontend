"use client"
import Link from 'next/link'
import {  usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import { Button } from './ui/button'
import { DropdownMenu } from '@radix-ui/react-dropdown-menu'
import { Brain, LayoutDashboard, ListChecks } from 'lucide-react'
import { SiJavascript, SiReact } from 'react-icons/si'
import { AiOutlineJavaScript } from "react-icons/ai";


const Sidebar = ({layout, setLayout}:any) => {

  return (
    <div className='w-full sticky top-0 '>
        <div className=''>

<div className=' flex flex-col gap-1 pt-5 pr-5 pl-5'>
  <div className=''>
      <button onClick={()=>setLayout("dashboard-layout")} className={`hover:bg-muted cursor-pointer w-full text-start text-[13px] rounded-lg text-muted-foreground py-2 px-2 flex items-center gap-2
${layout === "dashboard-layout" && "bg-muted text-secondary-foreground"}`}><LayoutDashboard width={16} height={16}/> Dashboard</button>
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
    </div>
  )
}

export default Sidebar
