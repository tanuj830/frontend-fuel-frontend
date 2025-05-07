import Link from 'next/link'
import React from 'react'

const GetfullAccess = () => {
  return (
    <div>
       <Link href="/pricing" className='rounded-full bg-primary text-primary-foreground text-xs py-2 px-3 text-nowrap font-semibold cursor-pointer'>Get full access</Link>
    </div>
  )
}

export default GetfullAccess
