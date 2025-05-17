import Navbar from '@/components/Navbar'
import CheckoutButton from '@/components/payments/CheckoutButton'
import { Badge } from '@/components/ui/badge'
import { Check, X } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <>
     <Navbar/>
      <div className='px-6 lg:px-[10vw] pt-5 pb-20 mt-20 lg:py-[10vh] flex flex-col gap-6'>
        <span className=' border text-xs w-fit py-1 px-3 rounded-full'>
        Purchasing power parity for India - 50% discount applied!
        </span>
        <h1 className='text-2xl lg:text-4xl  lg:w-[40vw] font-semibold'>Streamline your preparation, excel in interviews, and land lucrative job opportunities.</h1>
        
        {/* pricing cards */}
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>


        <div className='border lg:w-[25vw] rounded-xl py-5 px-7 text-sm '>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center justify-between'>
            <span className='mb-3 font-semibold'>Free plan</span>
            <span className='mb-3 font-semibold bg-primary text-xs p-1 rounded-md'>Active</span>
            </div>
            <span className='line-through text-muted-foreground'>₹499 /month</span>
            <span> <span className='text-4xl font-semibold'>₹0</span> <span className='text-muted-foreground'>/month</span></span>
            <span className='text-muted-foreground'>Billed monthly</span>
          </div>
          <div className='mt-5'>
          <button
        disabled={true}
        className=" px-4 py-2 text-sm rounded-full  border w-full text-muted-foreground/50"
      >
        Buy for ₹0
      </button>
          </div>
<div className='mt-5 flex flex-col gap-4 border-t pt-5'>
  <div className='flex gap-2 text-muted-foreground text-xs'>
    <span><X className='text-red-500' width={15} height={15}/></span>
    <span>Access to all questions</span>
  </div>
  <div className='flex gap-2 text-muted-foreground text-xs'>
    <span><X className='text-red-500' width={15} height={15}/></span>
    <span>Resume & portfolio reviews</span>
  </div>
  <div className='flex gap-2 text-muted-foreground text-xs'>
    <span><X className='text-red-500' width={15} height={15}/></span>
    <span>No-cost entry to the contest</span>
  </div>
  <div className='flex gap-2 text-muted-foreground text-xs'>
    <span><X className='text-red-500' width={15} height={15}/></span>
    <span>Early access to new features</span>
  </div>
  <div className='flex gap-2 text-muted-foreground text-xs'>
    <span><X className='text-red-500' width={15} height={15}/></span>
    <span>Unlock all premium interviews content</span>
  </div>
</div>
        </div>
        {/* card 2 */}
        <div className='border lg:w-[25vw] rounded-xl py-5 px-7 text-sm bg-gradient-to-tr from-[rgb(24, 24, 27)] to-muted'>
          <div className='flex flex-col gap-2'>
            <span className='mb-3 font-semibold'>Monthly plan</span>
            <span className='line-through text-muted-foreground'>₹99 /month</span>
            <span> <span className='text-4xl font-semibold'>₹99</span> <span className='text-muted-foreground'>/month</span></span>
            <span className='text-muted-foreground'>Billed monthly</span>
          </div>
          <div className='mt-5'>
            <CheckoutButton/>
          </div>
<div className='mt-5 flex flex-col gap-4 border-t pt-5'>
  <div className='flex gap-2 text-muted-foreground text-xs'>
    <span><Check className='text-green-500' width={15} height={15}/></span>
    <span>Access to all questions</span>
  </div>
  <div className='flex gap-2 text-muted-foreground text-xs'>
    <span><Check className='text-green-500' width={15} height={15}/></span>
    <span>Resume & portfolio reviews</span>
  </div>
  <div className='flex gap-2 text-muted-foreground text-xs'>
    <span><Check className='text-green-500' width={15} height={15}/></span>
    <span>No-cost entry to the contest</span>
  </div>
  <div className='flex gap-2 text-muted-foreground text-xs'>
    <span><Check className='text-green-500' width={15} height={15}/></span>
    <span>Early access to new features</span>
  </div>
  <div className='flex gap-2 text-muted-foreground text-xs'>
    <span><Check className='text-green-500' width={15} height={15}/></span>
    <span>Unlock all premium interviews content</span>
  </div>
</div>
        </div>
        </div>
      </div>
    </>
  )
}

export default page
