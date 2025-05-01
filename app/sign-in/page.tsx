"use client";
import { useAuth } from '@/components/AuthContext';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { supabase } from '@/lib/supabaseClient';
import { BASE_URL } from '@/lib/utils';
import withAuth from '@/lib/withAuth';
import axios from 'axios'
import { Chrome, Github } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
const page = () => {
  const [status, setStatus] = React.useState("initial") // initial, loading, success, failed
  const [message, setMessage] = React.useState("") 
  const [userInfo, setUserInfo] = React.useState({} as any)
  
  const {user, setUser}:any = useAuth();
    const router = useRouter()

    const authenticateUser = async(e: any) => {
      e.preventDefault();
      setStatus("loading");
      
console.log(userInfo)
      const { data, error } = await supabase.auth.signInWithPassword({
        email: userInfo.email,
        password: userInfo.password
      })
      console.log(data)
      if(error) {
      setStatus("failed");
      setMessage(error.message)
    }
else if(data) {
            setUser(data);
            setStatus("success");
            router.push("/questions");
          }
    };
    


    const handleChange = (e:any) =>{
        const value = e.target.value
        const name = e.target.name
    
        setUserInfo({...userInfo, [name]: value})
      }

      useEffect(()=>{
        if(user)router.push("/questions")
      },[])


  return (
    <div className='flex justify-center items-center min-h-[80vh]'>
      <form className='w-full lg:w-[40vw] min-h-[40vh] p-6' onSubmit={authenticateUser}>
        <div className='flex flex-col items-center gap-4 lg:gap-6'>
            <div>

            <h1 className='text-2xl font-bold py-2'>Sign in to your account</h1>
            <span className='text-sm text-muted-foreground'>Don't have an account? <Link className='text-primary' href="/sign-up">Sign up for free</Link></span>
            </div>
            <div className='flex flex-col lg:flex-row w-full items-center lg:justify-center gap-3 py-5'>
                <Button className='bg-muted/90 hover:bg-muted rounded-lg border border-muted-foreground/50 w-full lg:w-fit'><Chrome/>Continue with Google</Button>
                <Button className='bg-muted/90 hover:bg-muted rounded-lg border border-muted-foreground/50 w-full lg:w-fit'><Github/>Continue with GitHub</Button>
            </div>
            {
                          status === "failed" && <div className='text-destructive text-xs text-start w-full'>{message}</div>
            }
                <div className='flex w-full gap-4'>
                    <div className='border-t w-full mt-2.5'/>
                    <div className='text-sm text-muted-foreground text-center text-nowrap'>Or continue with</div>
                    <div className='border-t w-full mt-2.5'/>
                </div>
        <div className='w-full'>
            <label className="text-sm">* Email</label>
            <Input name='email' onChange={handleChange} placeholder='Ex: johndoe@gmail.com'/>
        </div>
        <div className='w-full'>
            <label className="text-sm">* Password</label>
            <Input name='password' onChange={handleChange} placeholder='Ex: ******'/>
        </div>
        <div className='flex justify-start items-start w-full'>
        <Link href="/forgot-password" className='text-primary w-fit'> Forgot your password?</Link>
        </div>
        {
            status === "loading" ?

            <Button disabled className='w-full rounded-lg text-sm cursor-pointer'>Sign in</Button>
         :   <Button className='w-full rounded-lg text-sm cursor-pointer'>Sign in</Button>
        }
        </div>
      </form>
    </div>
  )
}

export default page
