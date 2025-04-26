import React from 'react'

const Logo = () => {
  return (
    <div className='flex items-center gap-1'>
    <img src="/logo.svg" className='h-7' alt="" />
    <span className='text-[16px] font-semibold tracking-tighter hidden lg:visible '>ReactReady</span>
  </div>
  )
}

export default Logo
