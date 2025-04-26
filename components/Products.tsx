import React from 'react'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { ChevronDown } from 'lucide-react'

const Products = () => {
  return (
    <div>
       <HoverCard>
  <HoverCardTrigger className='flex relative items-center gap-1 cursor-pointer font-semibold text-sm'>
     <span className='relative'>
    <div className='h-1.5 w-1.5 bg-orange-600 rounded-full absolute -right-1 -top-1'/>
    <span className='hover:text-primary hidden lg:visible'>

    Products
    </span>
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

export default Products
