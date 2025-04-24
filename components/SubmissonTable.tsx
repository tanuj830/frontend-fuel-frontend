import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import dayjs from 'dayjs'
  
const SubmissonTable = ({question, submissons}:any) => {
  return (
    <div className='w-full min-h-[100%]'>
      <Table>
  <TableCaption className='text-xs'>A list of your last submissions.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Status</TableHead>
      <TableHead>Title</TableHead>
      <TableHead>Language</TableHead>
      <TableHead>Submitted on</TableHead>
      <TableHead className="text-right">Runtime</TableHead>
      <TableHead className="text-right">Memory</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {
      submissons.map((sub:any)=>(
<TableRow key={sub.id}>
      <TableCell className="font-medium text-green-500">ACCEPTED
      </TableCell>
      <TableCell className="font-medium">{question.title}</TableCell>
      <TableCell className="font-medium">Javascript</TableCell>
      <TableCell className="font-medium">{dayjs(sub.solvedOn).format('DD MMM YYYY, hh:mm A')}</TableCell>
      <TableCell className="font-medium">{Math.floor(Math.random()*100)}ms</TableCell>
      <TableCell className="font-medium">{Math.floor(Math.random()*10)}mb</TableCell>
    </TableRow>
      ))
    } 
  </TableBody>
</Table>

    </div>
  )
}

export default SubmissonTable
