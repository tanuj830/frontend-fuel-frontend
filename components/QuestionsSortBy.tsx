import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { ArrowDown01 } from 'lucide-react'
import { sortBy } from '@/lib/utils';


const QuestionsSortBy = ({questions, filteredQuestions, setFilteredQuestions}:any) => {   
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className='flex items-center gap-2'>
                        <ArrowDown01 /> <span>Sort by</span>
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                {
                    sortBy.map(filter=>(
                    <DropdownMenuItem key={filter.id}  onClick={()=>filter.function(questions, filteredQuestions, setFilteredQuestions)}>
                        {filter.sortby}
            </DropdownMenuItem>
                    )
                )
            }
            </DropdownMenuContent>

            </DropdownMenu>
        </div>
    )
}

export default QuestionsSortBy