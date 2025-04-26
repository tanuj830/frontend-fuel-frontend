import React from 'react'
import { useAuth } from './AuthContext'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import Link from 'next/link'
const UserProfile = () => {

    const { logout, user } = useAuth()

  return (
    user && <div>

            <HoverCard>
  <HoverCardTrigger className='flex items-center gap-1 cursor-pointer'> 
          <button className='cursor-pointer'>
          <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback className='uppercase pl-3 '>{user?.username.slice(0,2)}</AvatarFallback>
</Avatar>


            </button>  

     </HoverCardTrigger>
  <HoverCardContent className='w-52 rounded-xl p-2'>
    <div className='p-1'>
        <div className='pb-3 border-b'>

        <h6 className='text-sm font-semibold capitalize'>{user.username}</h6>
        </div>
        <div className='flex flex-col transition-all duration-2000 pt-2'>
            <Link href="/settings" className=' hover:bg-muted py-1 px-2 rounded-lg text-muted-foreground text-sm'>Settings</Link>
            {
            user ?
              <button className='cursor-pointer hover:bg-muted py-1 px-2 rounded-lg text-muted-foreground text-sm text-start' onClick={logout}>Sign out</button>
              : <Link className='cursor-pointer hover:bg-muted py-1 px-2 rounded-lg text-muted-foreground text-sm text-start' href="/sign-up">Sign in / up</Link>
          }
        </div>
    </div>
  </HoverCardContent>
</HoverCard>
    </div>
  )
}

export default UserProfile
