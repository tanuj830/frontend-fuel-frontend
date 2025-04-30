"use client"

import UICodingPage from '@/components/UICodingPage'
import withAuth from '@/lib/withAuth'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
  const params = useParams()
  return (
    <div>
      <UICodingPage/>
    </div>
  )
}

export default withAuth(page)
