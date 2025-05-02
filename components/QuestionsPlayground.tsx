"use client";

import React, { useEffect } from 'react'
import { Input } from './ui/input'
import { BookOpenText, Clock3, Ghost, Search } from 'lucide-react'
import { Badge } from './ui/badge';

import DisplayQuestions from './DisplayQuestions';
import QuestionsSortBy from './QuestionsSortBy';
import { useCategories } from '@/hooks/useCategories';
import FilterQuestions from './FilterQuestions';
// import Sidebar from './Sidebar';



const QuestionsPlayground = ({ questions }:any) => {
    // const [categories, setCategories] = React.useState<string[]>([]);
    const [filterClicked, setFilterClicked] = React.useState("")
    const [query, setQuery] = React.useState("")
    const [filteredQuestions, setFilteredQuestions] = React.useState([] as any);


    const handleQuery = (e: any) => {
        const value = e.target.value;
        setQuery(value);
    
        if (!value) {
            setFilteredQuestions([]);
            return;
        }
    
        const regex = new RegExp(value, "i");
        const filterQuestions: any[] = [];
    
        questions.forEach((question:any) => {
            if (
                Array.isArray(question.tags) &&
                question.tags.some((tag: string) => regex.test(tag))
            ) {
                filterQuestions.push(question);
            }
        });

        setFilteredQuestions(filterQuestions);
    };
    
    const handleFilterQuestions = (cat: string) => {
        if (filterClicked === cat) {
            setFilterClicked("")
            setFilteredQuestions([])
            return;
        }
        else setFilterClicked(cat)
        const clonedQuestions = [...questions]
        console.log(questions, "qq")
        const filteredQuests = clonedQuestions.filter(quest => quest.category_id == cat)
        setFilteredQuestions(filteredQuests)
    }


    const {categories, loading} = useCategories()
       if(loading)<Badge variant="outline" className='animate-pulse'>Loading</Badge>


    return (
        <div className='lg:w-[75vw]'>
            <div>

                {/* input */}
                <form className='flex items-center gap-3 w-full lg:w-[60vw]'>
                    <div className='relative w-full'>
                        <Input placeholder='Search within this list of questions' className='px-10 py-3 text-xs lg:text-sm' onChange={handleQuery} />
                        <span className='absolute top-2 left-2 text-muted-foreground'>
                            <Search width={20} height={20} />
                        </span>
                    </div>
                    <QuestionsSortBy questions={questions} filteredQuestions={filteredQuestions} setFilteredQuestions={setFilteredQuestions}/>
                </form>

                {/* filter by categories */}
                <div className='py-6 flex items-center flex-wrap gap-5'>
                    {
                        Object.keys(categories).map((key: string, ind:number) => (
                            <div key={key+ind}>
                                {
                                    filterClicked == key ?
                                        <Badge variant="outline" className={`cursor-pointer bg-primary text-primary-foreground`} onClick={() => handleFilterQuestions(key)} >{categories[key]}</Badge>
                                        : <Badge variant="outline" className={`cursor-pointer`} onClick={() => handleFilterQuestions(key)} >{categories[key]}</Badge>
                                }
                            </div>
                        ))
                    }
                </div>

                <div className='text-muted-foreground flex gap-8 items-center '>
                    <div className='flex items-center gap-2'>
                        <BookOpenText width={20} height={20} />
                        <span className='text-muted-foreground text-xs'>{filteredQuestions.length > 0 ? filteredQuestions?.length : questions?.length} questions</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Clock3 width={20} height={20} />
                        <span className='text-muted-foreground text-xs'>{filteredQuestions.length > 0 ? Math.floor(filteredQuestions?.length * 0.5) :Math.floor(questions?.length * 0.5)} hours total</span>
                    </div>
                </div>

                {/* questions playground */}
                <div className='mt-5 w-full flex flex-col lg:flex-row gap-8 '>
                    <div className='w-full lg:w-[70%]'>

                    {
                        filteredQuestions.length > 0 ? <DisplayQuestions questions={filteredQuestions} /> :
                        questions?.length > 0 ? <DisplayQuestions questions={questions} />
                        : <div className='h-96 w-full flex justify-center items-center flex-col border bg-muted rounded-lg'>
                                    <span className='text-muted-foreground pb-3'><Ghost width={40} height={40} /></span>
                                    <span className='font-semibold py-1'>No questions</span>
                                    <span className='text-muted-foreground text-sm' >Try changing your search terms or filters</span>
                                </div>
                    }
                    </div>
                    <div className='relative w-full lg:w-[30%]'>
                    <FilterQuestions questions={questions}/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default QuestionsPlayground
