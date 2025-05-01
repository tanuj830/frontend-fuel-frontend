"use client";
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { supabase } from '@/lib/supabaseClient';
import { BASE_URL } from '@/lib/utils';
import axios from 'axios'
import { Chrome, Github } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useTheme } from 'next-themes';



const page = () => {

  const {theme, setTheme} = useTheme()

  return (
    <div className='flex justify-center items-center min-h-[80vh]'>
          
      <div className='w-full lg:w-[40vw] min-h-[40vh] p-6'>
      <Auth
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: 'oklch(0.705 0.213 47.604)',
                brandAccent: '' 
              },
            },
          },
        }}
        theme={theme === "light" ? "light" : "dark"}
        providers={['github']}
        redirectTo="https://reactready.vercel.app/questions"
      />
    </div>
    </div>
  )
}

export default page
