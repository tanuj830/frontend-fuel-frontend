import { Flame } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FeaturedItem = () => {
  return (

      <div className="p-5 rounded-md space-y-4 w-full flex flex-col">
  {/* <div className="text-xs text-zinc-400">Featured</div> */}
  <div className="p-[1px] rounded-xl ">
  <div className="bg-gradient-to-r from-muted to-[rgb(24, 24, 27)] border dark:border-muted to rounded-xl p-3 flex items-center gap-4">
    {/* <img src="/your-feature-image.png" alt="React Challenges" className="w-12 h-12 rounded" /> */}
    <div className='border text-nowrap flex items-center gap-2 py-5 px-2 rounded-xl'>
      <span className='uppercase font-bold'>Level up </span>
      <Flame className='text-primary'/>
    </div>
    <div>
      <p className="text-sm font-semibold">Daily <br /> Level Up</p>
      <p className="text-xs text-muted-foreground">Solve real-world UI tasks</p>
    </div>
  </div>
  </div>
  <Link href="/questions" className="w-full bg-gradient-to-r from-muted to-[rgb(24, 24, 27)] border dark:border-muted text-muted-foreground text-xs font-medium text-center py-2 rounded-lg ">
    🚀 Gets started – It's Free
  </Link>
</div>

  )
}

export default FeaturedItem
