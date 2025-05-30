import React from 'react';
import { tagColorMap, tagIconMap } from '@/constants/icons';

const DisplayTags = ({ question }: any) => {
  return (
    question && (
      <div className="flex gap-2 items-center">
        {question.tags.map((tag: any) => {
          const Icon = tagIconMap[tag];
          const colorClass = tagColorMap[tag];

          if(tag && colorClass)
          return (
            <span className={`flex items-center gap-1 ${colorClass}`} key={tag}>
              {Icon && <Icon className="w-5 h-5 rounded-md" />}
            </span>
          );
        })}
      </div>
    )
  );
};

export default DisplayTags;
