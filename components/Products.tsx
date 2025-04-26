import React from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


import { Backpack, ChevronDown, File, Megaphone, Waypoints } from 'lucide-react'
import Logo from './Logo'
import Link from 'next/link'

const Products = () => {
  return (
    <div>
      <Popover>
        <PopoverTrigger className='flex relative items-center gap-1 cursor-pointer font-semibold text-sm'>
          <span className='relative'>
            <div className='h-1.5 w-1.5 bg-orange-600 rounded-full absolute -right-1 -top-3 lg:-top-1' />
            <span className='hover:text-pxrimary hidden lg:inline-block'>

              Products
            </span>
          </span>
          <ChevronDown className='text-muted-foreground font-bold' width={19} height={19} />

        </PopoverTrigger>
        <PopoverContent className='w-72 p-0 rounded-xl '>
          <div className='p-5' > 

            <div className='text-xs mb-4 text-muted-foreground'>
              Products
            </div>
            <div className='flex flex-col gap-3'>
              <div className='flex items-center gap-3'>
                <Logo height={5} text={13} gap={2} /> <div className='border-r dark:border-white border-gray-300 h-3'/> <Link href="#" className='text-nowrap text-sm font-medium'>Interviews</Link>
              </div>
              <div className='flex items-center gap-3'>
                <Logo height={5} text={13} gap={2} /> <div className='border-r dark:border-white border-gray-300 h-3'/> <Link href="#" className='text-nowrap text-sm font-medium'>Projects</Link>
              </div>
            </div>
          </div>
          <div className=' bg-muted p-5 flex flex-col gap-3'>
            <div className='text-xs mb-4 text-muted-foreground'>Others</div>
            <div className='text-sm flex items-center gap-3'><File className="text-muted-foreground" width={15} height={15}/> <span className='font-medium'>Blogs</span></div>
            <div className='text-sm flex items-center gap-3'><Megaphone className="text-muted-foreground" width={15} height={15}/> <span className='font-medium'>Advertise with us</span></div>
            <div className='text-sm flex items-center gap-3'><Waypoints className="text-muted-foreground" width={15} height={15}/> <span className='font-medium'>Roadmap</span></div>
            <div className='text-sm flex items-center gap-3'><Backpack className="text-muted-foreground" width={15} height={15}/> <span className='font-medium'>We're hiring</span></div>
          </div>

        </PopoverContent>
      </Popover>
    </div>
  )
}

export default Products
