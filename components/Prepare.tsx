import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowRight, Backpack, BookCheck, ChevronDown, File, FileJson, Megaphone, Waypoints } from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Logo from './Logo'
import Link from 'next/link'
import { Badge } from './ui/badge'


const Prepare = () => {
  return (
    <div>
      <Popover>
  <PopoverTrigger  className='flex items-center gap-1 cursor-pointer font-semibold text-sm'> <span className='relative hover:text-primary'>
     <div className='h-1.5 w-1.5 bg-orange-600 rounded-full absolute -right-1 -top-1'/>
    Prepare
    </span>
    <ChevronDown className='text-muted-foreground font-bold' width={19} height={19}/>

    </PopoverTrigger>
    <PopoverContent className='w-[95vw] lg:w-[50vw] p-0 rounded-xl '>
          <div className='flex flex-col lg:flex-row'>
            <div className='py-5 px-3 pr-20 bg-muted'>
                <span className='text-nowrap text-sm'>Practice questions</span>
            </div>
            <div className='py-5 px-3 w-full'>
            <Link href="/questions" className='flex w-full gap-3 items-center border border-transparent rounded-xl p-3 hover:border-primary text-xs'>

                  <div className=''><BookCheck width={30} height={30} /></div>
                  <div className='flex flex-col  gap-3 w-full'>
                    <div className='text-sm font-semibold'>
                      All practice questions
                    </div>
                    <div>
                    The largest question bank for front end interviews to ace your next frontend interview
                    </div>
                    <div className='flex flex-wrap gap-2 items-center'>
                      <span className='text-[9px] rounded-lg p-1 gradient text-primary-foreground'>User Interface coding</span>
                      <span className='text-[9px] rounded-lg p-1 gradient text-primary-foreground'>Algorithm coding</span>
                      <span className='text-[9px] rounded-lg p-1 gradient text-primary-foreground'>JavaScript functions</span>
                    </div>
                  </div>
                  <div className=' '> <span className='text-muted-foreground hover:text-primary'><ArrowRight width={30} height={30} /></span></div>

            </Link>

            <Link href="/questions" className='flex w-full gap-3 items-center border border-transparent rounded-xl p-3 hover:border-primary text-xs'>

<div className=''><FileJson width={30} height={30} /></div>
<div className='flex flex-col  gap-3 w-full'>
  <div className='text-sm font-semibold'>
    React specific questions
  </div>
  <div>
  Targeted practice in specific frontend questions to ace your next frontend interview
  </div>
  <div className='flex flex-wrap gap-2 items-center'>
    <span className='text-[9px] rounded-lg p-1 gradient text-primary-foreground'>React</span>
    <span className='text-[9px] rounded-lg p-1 gradient text-primary-foreground'>JavaScript</span>
  </div>
</div>
<div className=' '> <span className='text-muted-foreground hover:text-primary'><ArrowRight width={30} height={30} /></span></div>

</Link>

<Link href="/questions" className='flex w-full gap-3 items-center border border-transparent rounded-xl p-3 hover:border-primary text-xs'>

<div className=''><BookCheck width={30} height={30} /></div>
<div className='flex flex-col  gap-3 w-full'>
  <div className='text-sm font-semibold'>
    Curated Questions
  </div>
  <div>
  Targeted category wise curated questions to ace your next frontend interview
  </div>
  <div className='flex flex-wrap gap-2 items-center'>
    <span className='text-[9px] rounded-lg p-1 gradient text-primary-foreground'>User Interface coding</span>
    <span className='text-[9px] rounded-lg p-1 gradient text-primary-foreground'>Algorithm coding</span>
    <span className='text-[9px] rounded-lg p-1 gradient text-primary-foreground'>JavaScript functions</span>
  </div>
</div>
<div className=' '> <span className='text-muted-foreground hover:text-primary'><ArrowRight width={30} height={30} /></span></div>

</Link>
            </div>
          </div>

        </PopoverContent>

</Popover>

    </div>
  )
}

export default Prepare
