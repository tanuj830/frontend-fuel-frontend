import React from 'react'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { ChevronDown } from 'lucide-react'

const Prepare = () => {
  return (
    <div>
     <HoverCard>
     <HoverCardTrigger className='flex items-center gap-1 cursor-pointer font-semibold text-sm'> <span className='relative hover:text-primary'>
     <div className='h-1.5 w-1.5 bg-orange-600 rounded-full absolute -right-1 -top-1'/>
    Prepare
    </span>
    <ChevronDown className='text-muted-foreground font-bold' width={19} height={19}/>
     </HoverCardTrigger>
  <HoverCardContent>
    The React Framework – created and maintained by @vercel.
  </HoverCardContent>
</HoverCard>


    </div>
  )
}

export default Prepare
