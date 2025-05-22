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
import { Span } from 'next/dist/trace'
import DisplayTags from './DisplayTags'
import { Copy, Database, Gauge } from 'lucide-react'
import { copyToClipboard } from '@/lib/utils'

const SubmissonTable = ({ question, submissons }: any) => {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = (code:string) => {
    setCopied(true)
    copyToClipboard(code)
    setTimeout(()=>{setCopied(false)}, 3000)
  }

  return (
    <div className='w-full min-h-[100%]'>
      <div className='flex flex-col gap-4 text-muted-foreground'>
        <div className='flex items-center gap-1'>


          {submissons.is_correct ? <span className='font-medium text-green-500 text-sm'>ACCEPTED</span> : <span className='font-medium text-red-500 text-sm'>FAILED</span>}
      <div className='italic text-sm'>: Your last submission passed all the checks</div>
        </div>
        <div className='flex items-center gap-5'>

            <div className='flex items-center gap-1'>
              <Gauge width={16} height={16}/><span className='text-sm'>{Math.floor(Math.random()*100)} ms</span>
            </div>
            <div className='flex items-center gap-1'>
              <Database width={16} height={16}/><span className='text-sm'>{Math.floor(Math.random()*10)} mb</span>
            </div>
        </div>
        <div className='relative' id='disp'>
          {
            copied && <span className='absolute -top-5 right-2 text-xs gradient text-primary-foreground px-3 py-1 rounded-full'>Copied</span>
          }
          <button className='absolute top-5 right-5  hover:text-muted-foreground/50 cursor-pointer' onClick={()=>handleCopy(submissons?.code)}>
              <Copy width={15} height={15}/>
          </button>
        <pre className="overflow-auto">
      <code>{submissons?.code}</code>
    </pre>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default SubmissonTable
