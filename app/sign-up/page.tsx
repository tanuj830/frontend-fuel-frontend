"use client";
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { supabase } from '@/lib/supabaseClient';
import { BASE_URL } from '@/lib/utils';
import axios from 'axios';
import { Chrome, Github } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

const page = () => {
  const [user, setUser] = React.useState({} as any)
  const [status, setStatus] = React.useState("initial") // initial, loading, success, failed
  const[message, setMessage] = React.useState("")
  const router = useRouter()

  
  const createAccount =  async(e:any) =>{
    e.preventDefault()
    setStatus("loading")
    const { data, error } = await supabase.auth.signUp({
      email: user.email,
      password: user.password
    })
    if (error) {
          setStatus("failed")
          setMessage(error.message)
    }
    else if(data){setStatus("success")
      // router.push("/sign-in")
    setMessage("Please check your email and confirm your address before logging in.")
    }
    
  }

    const handleChange = (e:any) =>{
    const value = e.target.value
    const name = e.target.name

    setUser({...user, [name]: value})
  }
  return (
    <>
    <Navbar/>
    <div className='flex justify-center items-center min-h-[80vh]'>
      <form className='w-full lg:w-[40vw] p-6 min-h-[40vh]' onSubmit={createAccount}>
        <div className='flex flex-col items-center gap-4 lg:gap-6'>
            <div>

            <h1 className='text-2xl font-bold py-2'>Create a new account</h1>
            <span className='text-sm text-muted-foreground'>Already have an account? <Link className='text-primary' href="/sign-in"> Sign in</Link></span>
             </div>
            <div className='flex flex-col lg:flex-row items-center gap-3 py-5 lg:justify-center w-full'>
                <Button className='bg-muted/90 hover:bg-muted rounded-lg border border-muted-foreground/50 w-full lg:w-fit'><Chrome/>Continue with Google</Button>
                <Button className='bg-muted/90 hover:bg-muted rounded-lg border border-muted-foreground/50 w-full lg:w-fit'><Github/>Continue with GitHub</Button>
            </div>
                <div className='flex w-full gap-4'>
                    <div className='border-t w-full mt-2.5'/>
                    <div className='text-sm text-muted-foreground text-center text-nowrap'>Or continue with</div>
                    <div className='border-t w-full mt-2.5'/>
                </div>
                {
                  status === "failed" ? <div className='text-destructive text-xs text-start w-full'>{message}</div>
                  : status === "success" ? <div className='text-green-600 text-xs text-start w-full'>{message}</div> : null
                }
        {/* <div className='w-full'>
            <label className="text-sm" >* Username</label>
            <Input name='username' onChange={handleChange} placeholder='Ex: johndoe'/>
            </div> */}
        <div className='w-full'>
            <label className="text-sm">* Email</label>
            <Input name='email' onChange={handleChange} placeholder='Ex: johndoe@gmail.com'/>
        </div>
        <div className='w-full'>
            <label className="text-sm">* Password</label>
            <Input name='password' onChange={handleChange} placeholder='******'/>
        </div>
      
        {
          status === "loading" ? 
          <Button disabled className={`w-full rounded-lg text-sm cursor-pointer`}>Sign Up</Button>
          :  <Button className={`w-full rounded-lg text-sm `}>Sign Up</Button>
        }
        </div>
      </form>
    </div>
        </>
  )
}

export default page
