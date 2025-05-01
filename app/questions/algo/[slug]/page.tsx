"use client";

import AlgoCodingPage from '@/components/AlgoCodingPage'
import { supabase } from '@/lib/supabaseClient';
import { useParams, useRouter } from 'next/navigation'
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
      <AlgoCodingPage params={params}/>
    </div>
  )
}

export default page
