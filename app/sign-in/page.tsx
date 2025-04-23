"use client";
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import axios from 'axios'
import { Chrome, Github } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

const page = () => {
    const [status, setStatus] = React.useState("initial") // initial, loading, success, failed
    const [user, setUser] = React.useState({} as any)

    const router = useRouter()

    const authenticateUser = (e:any) => {
        e.preventDefault()
        setStatus("loading")
        // axios.post(`${BASE_URL}/api/questions`, user).then(res=>{
        axios.post(`http://localhost:8080/api/users/authenticate`, user).then(res=>{
          if(res.data){
            console.log(res.data)
            setStatus("success")
            // localStorage.setItem("user", JSON.stringify(res.data))
            router.push("/questions")
          }
          else setStatus("failed")
        }).catch(err=>setStatus("failed"))
    }


    const handleChange = (e:any) =>{
        const value = e.target.value
        const name = e.target.name
    
        setUser({...user, [name]: value})
      }



  return (
    <div className='flex justify-center items-center min-h-[80vh]'>
      <form className='w-full lg:w-[40vw] min-h-[40vh] p-6' onSubmit={authenticateUser}>
        <div className='flex flex-col items-center gap-4 lg:gap-6'>
            <div>

            <h1 className='text-2xl font-bold py-2'>Sign in to your account</h1>
            <span className='text-sm text-muted-foreground'>Don't have an account? <Link className='text-primary' href="/sign-up">Sign up for free</Link></span>
            </div>
            <div className='flex flex-col lg:flex-row w-full items-center gap-3 py-5'>
                <Button className='bg-muted/90 hover:bg-muted rounded-lg border border-muted-foreground/50 w-full'><Chrome/>Continue with Google</Button>
                <Button className='bg-muted/90 hover:bg-muted rounded-lg border border-muted-foreground/50 w-full'><Github/>Continue with GitHub</Button>
            </div>
            {
                          status === "failed" && <div className='text-destructive text-xs text-start w-full'>Credentials mismatched, try again with correct credentials!</div>
            }
                <div className='flex w-full gap-4'>
                    <div className='border-t w-full mt-2.5'/>
                    <div className='text-sm text-muted-foreground text-center text-nowrap'>Or continue with</div>
                    <div className='border-t w-full mt-2.5'/>
                </div>
        <div className='w-full'>
            <label className="text-sm">* Username or Email</label>
            <Input name='username' onChange={handleChange} placeholder='Ex: johndoe or johndoe@gmail.com'/>
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

            <Button disabled className='w-full rounded-lg text-sm cursor-pointer'>Sign Up</Button>
         :   <Button className='w-full rounded-lg text-sm cursor-pointer'>Sign Up</Button>
        }
        </div>
      </form>
    </div>
  )
}

export default page
