import React from 'react'

const Logo = ({height, text, gap}:any) => {
  return (
    <div className={`flex items-end ${gap ? `gap-${gap}` : "gap-1"}`}>
    <img src="/logo.svg" className={`${height ? `h-${height}`: "h-7"}`} alt="" />
    <span className={`font-semibold tracking-tighter hidden lg:inline-block ${text ? `text-[${text}px]`: "text-[16px]"}`}>ReactReady</span>
  </div>
  )
}

export default Logo
