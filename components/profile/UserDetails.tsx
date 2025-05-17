"use client"
import { supabase } from '@/lib/supabaseClient'
import { Calendar, Mail, User } from 'lucide-react'
import React from 'react'

const UserDetails = () => {

  const [user, setUser] = React.useState({} as any)

  React.useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser()
      if (data?.user) setUser(data.user)

    }

    getUser()
  }, [])

  return (
    user && <div className='lg:sticky top-0 p-5'>
      <div className='flex flex-col gap-6 '>
        <div>
          <img src={user?.user_metadata?.avatar_url} className='h-28 w-2h-28 rounded-full' alt="user_image" />
        </div>

        <div>
          <span className='font-semibold text-lg'>{user?.user_metadata?.full_name}</span>
        </div>

        <div className='flex flex-col gap-5 mt-2 text-sm'>
          <button className='bg-gradient text-white py-2 w-full text-xs rounded-full '>Get full access</button>
          <div className='flex items-center gap-2'>
            <Mail className='text-muted-foreground' width={16} height={16} /> <span>{user?.user_metadata?.email}</span>
          </div>
          <div className='flex items-center gap-2'>
            <User className='text-muted-foreground' width={16} height={16} /> <span>{user?.user_metadata?.user_name}</span>
          </div>
          <div className='flex items-center gap-2'>
            <Calendar className='text-muted-foreground' width={16} height={16} /> <span>Joined on {new Date(user?.created_at).toLocaleString()}</span>
          </div>
          <div className='flex items-center gap-2'>
            <Calendar className='text-muted-foreground' width={16} height={16} /> <span>Updated on {new Date(user?.updated_at).toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDetails
