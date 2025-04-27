import { Fan, Flower } from 'lucide-react'
import React from 'react'

const Logo = ({height, text, gap, showFull}:any) => {
  return (
    <div className={`flex items-end ${gap ? `gap-${gap}` : "gap-1"}`}>
    {/* <img src="/logo.svg" className={`${height ? `h-${height}`: "h-7"}`} alt="" /> */}
    {/* <Fan/> */}
    <Flower className=''/>
    <span className={`font-semibold tracking-tighter ${showFull ? "lg:inline-block" : "hidden"}  ${text ? `text-[${text}px]`: "text-[16px]"}`}>ReactReady</span>
  </div>
  )
}

export default Logo
