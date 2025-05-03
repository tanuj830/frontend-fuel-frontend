"use client"

import Navbar from '@/components/Navbar'
import UICodingPage from '@/components/UICodingPage'
import { supabase } from '@/lib/supabaseClient'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  const params = useParams()

  
  const router = useRouter()


  React.useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/sign-in');
      }
    };
    checkUser();
  }, []);
  return (
    <div>
      <Navbar/>
      <UICodingPage params={params}/>
    </div>
  )
}

export default page
