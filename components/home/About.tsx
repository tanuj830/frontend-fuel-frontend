'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'


const About = () => {
  return (
    <div className='w-full lg:w-[50vw] flex flex-col items-center gap-12 lg:px-4'>
      <div className='text-xl lg:text-3xl font-semibold text-center'>
        ✨ We're building GreatReact with dedication, innovation, and real-world experience.
      </div>


      <div className='lg:w-[80%] w-full p-1 border border-dashed rounded-xl'>
        <div className='relative z-10 w-full flex flex-col gap-5 bg-gradient-to-bl from-background to-muted rounded-xl p-6'>
          <p className=' leading-relaxed'>
            “At <strong>GreatReact</strong>, we're building a platform to help you become a complete frontend developer.
            From crafting real-world React UI components to replicating common interview challenges,
            we focus on practical learning that prepares you for job-ready development.
          </p>
          <p className='leading-relaxed'>
            But we don’t stop at just the UI. GreatReact also includes <strong>DSA problems</strong> and <strong>JavaScript coding challenges</strong>
            to sharpen your logic and problem-solving skills—key to cracking tech interviews and becoming a full-fledged engineer.
          </p>

          <div className='flex justify-between items-end pt-4 border-t border-muted'>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-3'>
              <span className='font-semibold'>Tanuj Bhatt</span>
<Link href="https://www.linkedin.com/in/tanuj-bhatt-85a2511b5/" target='_blank' className='border p-1 rounded-lg text-cyan-700'><FaLinkedinIn/></Link>
                </div>
                <div className='flex flex-col'>
              <small className='text-muted-foreground text-[11px] lg:text-xs'>Founder, Creator of GreatReact</small>
              <small className='text-muted-foreground lg:text-nowrap text-[11px] lg:text-xs'>
                Full Stack Developer | Frontend Engineer | Hackathon Builder
              </small>
                </div>
            </div>
            <Image
              src='/image.png'
              className='rounded-full shadow-md lg:hidden inline-block'
              width={60}
              height={60}
              alt='profile_photo'
            />
            <Image
              src='/image.png'
              className='rounded-full shadow-md hidden lg:inline-block'
              width={80}
              height={80}
              alt='profile_photo'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
