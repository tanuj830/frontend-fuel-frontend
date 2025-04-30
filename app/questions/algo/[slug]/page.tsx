"use client";

import AlgoCodingPage from '@/components/AlgoCodingPage'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
  const params = useParams()
  return (
    <div>
      <AlgoCodingPage params={params}/>
    </div>
  )
}

export default page
