"use client"
import Account from '@/components/profile/Account'
import Activity from '@/components/profile/Activity'
import SavedCode from '@/components/profile/SavedCode'
import Security from '@/components/profile/Security'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  const [window, setWindow] = React.useState("activity")
  const router = useRouter()

  return (
    <div className='h-[10000px] p-5'>
      <div className='flex items-center gap-2'>
        <button onClick={()=>setWindow("activity")} className={`px-3 py-2 text-xs text-muted-foreground ${window === "activity" && "bg-muted border rounded-lg dark:text-white text-secondary-foreground"}`}>Activity</button>
        <button onClick={()=>setWindow("account")} className={`px-3 py-2 text-xs text-muted-foreground ${window === "account" && "bg-muted border rounded-lg dark:text-white text-secondary-foreground"}`}>Account</button>
        <button onClick={()=>setWindow("security")} className={`px-3 py-2 text-xs text-muted-foreground ${window === "security" && "bg-muted border rounded-lg dark:text-white text-secondary-foreground"}`}>Security</button>
        <button onClick={()=>setWindow("saved-code")} className={`px-3 py-2 text-xs text-muted-foreground ${window === "saved-code" && "bg-muted border rounded-lg dark:text-white text-secondary-foreground"}`}>Saved Code</button>
      </div>

      <div className='pt-10 px-3'>
      {
        window === "activity" ? <Activity/>
        :window === "account" ? <Account/>
        :window === "security" ? <Security/>
        :window === "saved-code" ? <SavedCode/>
        :window === "account" && <Account/>
        
      }
      </div>

    </div>
  )
}

export default page
