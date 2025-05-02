import { ArrowRight, BadgeCheck, Flame } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useCategories } from '@/hooks/useCategories'; // Import custom hook for categories

import DisplayTags from './DisplayTags';
const { htmlToText } = require('html-to-text');

interface ChallengeInterface {
  id: string;
  title: string;
  category: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
  starterCode: string;
  solutionCode: string;
  createdAt: string;
}

interface QuestionsPlaygroundProps {
  questions: ChallengeInterface[];
}


const DisplayQuestions: React.FC<QuestionsPlaygroundProps> = ({ questions }) => {
  const { categories, loading: categoryLoading } = useCategories();

  return (
    <div className="flex flex-col">
      {questions.map((question:any) => (
        <Link
          href={
            categories[question.category_id] === 'Algo coding' || categories[question.category_id] === 'JS functions'
              ? '/questions/algo/' + question.id
              : categories[question.category_id] === 'UI coding'
              ? '/questions/user-interface/' + question.id
              : '#'
          }
          key={question.id}
          className="w-full border flex items-center gap-3 lg:gap-5 p-3 lg:p-5 bg-muted rounded-lg hover:border hover:border-primary"
        >
          <div>
            <button className="text-muted-foreground hover:text-green-600">
              <BadgeCheck width={30} height={30} />
            </button>
          </div>
          <div className="min-w-[73%] max-w-[73%] lg:min-w-[85%] lg:max-w-[85%]">
            <h6>{question.title}</h6>
            <p className="truncate text-muted-foreground text-sm pt-2 lg:py-3">
              {htmlToText(question.text)}
            </p>
            <div className="flex lg:items-center flex-col lg:flex-row text-xs text-muted-foreground gap-3 lg:gap-7 mt-2">
              <div className="flex items-center gap-7">
                <div>

                {categoryLoading ? (
                  <span>Loading category...</span>
                ) : (
                  <span className="whitespace-nowrap">{categories[question.category_id] || 'Unknown'}</span>
                )}
                </div>
                <div className='flex gap-2 items-center'>

                <Flame width={21} height={21} />
                {question.difficulty === 'easy' ? (
                  <span className="capitalize text-green-600 font-semibold">{question.difficulty}</span>
                ) : question.difficulty === 'medium' ? (
                  <span className="capitalize text-yellow-600 font-semibold">{question.difficulty}</span>
                ) : (
                  <span className="capitalize text-red-600 font-semibold">{question.difficulty}</span>
                )}
                </div>
              </div>
             <DisplayTags question={question}/>
            </div>
          </div>
          <div className="w-full">
            <span className="text-muted-foreground hover:text-primary">
              <ArrowRight width={30} height={30} />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DisplayQuestions;
