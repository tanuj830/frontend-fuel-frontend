import React from 'react'
import Logo from './Logo'
import { Fan, Flower } from 'lucide-react'

const Loader = () => {
  return (
    <div className='h-full w-full fixed top-0 bottom-0 z-[1000] left-0 right-0 flex justify-center items-center bg-muted/50'>
        <span className=' animate-spin duration-3000 text-primary'>
        {/* <Fan width={50} height={50}/> */}
        <Flower width={50} height={50}/>
        </span>
    </div>
  )
}

export default Loader
