import { Fan, Flower } from 'lucide-react'
import React from 'react'

const Logo = ({height, text, gap, showFull}:any) => {
  return (
    <div className={`flex items-end ${gap ? `gap-${gap}` : "gap-1"}`}>
    <Flower className=''/>
    <span className={`font-semibold tracking-tighter ${showFull ? "lg:inline-block" : "hidden"}  ${text ? `text-[${text}px]`: "text-[16px]"}`}>GreatReact</span>
  </div>
  )
}

export default Logo
