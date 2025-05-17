import React, { useEffect } from 'react'

// import { Checkbox } from "@/components/ui/checkbox"

const FilterQuestions = ({questions}:any) => {

    const [tags, setTags] = React.useState([] as any [])
    
    // getting all tags
    useEffect(()=>{
        const map = new Map();
        if(questions)
        questions.map((question:any)=>{
            question.tags.map((tag:string)=>{
                if(!map.has(tag))map.set(tag, 1);
            })
    })
    console.log(map)
        const allTags = []
        for (let [key, value] of map) {
            allTags.push(key)
          }
          setTags(allTags);

    }, [questions])

  return (
    <div className='sticky top-24 w-full'>
      <div className='w-full'>
        <span className='font-medium'>Topics Covered</span>
      <div className='flex flex-wrap gap-4 text-muted-foreground text-sm mt-3'>
            {
                tags.map(tag=>(
                    <div key={tag} className='flex items-center gap-2 flex-row '>
                        {/* <input type='checkbox' className='h-4 w-4 appearance-none border rounded-lg border-muted-foreground/35 checked:bg-primary'/> */}
                        <span className='capitalize'>{tag}</span>
                    </div>
                ))
            }
      </div>
      </div>
    </div>
  )
}

export default FilterQuestions
