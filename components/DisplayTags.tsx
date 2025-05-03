import React from 'react'
import { tagColorMap, tagIconMap } from '@/constants/icons';

const DisplayTags = ({question}:any) => {
  return (
    question && <div className="flex gap-2 items-center">
    {/* {
       question.tags.map((tag:any)=>{
         const Icon = tagIconMap[tag]
         return <span className={tagColorMap[tag]} key={tag}><Icon>{tagIconMap[tag]}</Icon></span>
       })
     } */}
   </div>
  )
}

export default DisplayTags
