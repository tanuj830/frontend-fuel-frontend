import axios from "axios";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const BASE_URL = "https://frontend-fuel-backend-o3sh.onrender.com"

// sortby feature in QuestionsSortBy
const difficultyOrder:any = {
  easy: 1,
  medium: 2,
  hard: 3,
};


// utils/copyToClipboard.ts
export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Copied to clipboard:", text);
  } catch (err) {
    console.error("Failed to copy:", err);
  }
};



export const sortByEasyToHard = (questions:any, filteredQuestions:any, setFilteredQuestions:any) => {
  const listToSort = filteredQuestions?.length > 0 ? [...filteredQuestions] : [...questions];
  const sorted = listToSort.sort((a: any, b: any) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
  setFilteredQuestions(sorted);
};

export const sortByHardToEasy = (questions:any, filteredQuestions:any, setFilteredQuestions:any) => {
      const listToSort = filteredQuestions?.length > 0 ? [...filteredQuestions] : [...questions];
      const sorted = listToSort.sort((a: any, b: any) => difficultyOrder[b.difficulty] - difficultyOrder[a.difficulty]);
      setFilteredQuestions(sorted);
}
export const sortByAToZ = (questions:any, filteredQuestions:any, setFilteredQuestions:any) => {
  const listToSort = filteredQuestions?.length > 0 ? [...filteredQuestions] : [...questions];
  const sorted = listToSort.sort((a: any, b: any) => a.title.localeCompare(b.title));
  setFilteredQuestions(sorted);
}
export const sortByZToA = (questions:any, filteredQuestions:any, setFilteredQuestions:any) => {
  const listToSort = filteredQuestions?.length > 0 ? [...filteredQuestions] : [...questions];
  const sorted = listToSort.sort((a: any, b: any) => b.title.localeCompare(a.title));
  setFilteredQuestions(sorted);
}

export const sortBy = [
  {
      id:1,
      sortby: "Difficulty: Easy to Hard",
      function: sortByEasyToHard
  },
  {
      id:2,
      sortby: "Difficulty: Hard to Easy",
      function: sortByHardToEasy
  },
  {
      id:3,
      sortby: "Title: A to Z",
      function: sortByAToZ
  },
  {
      id:4,
      sortby: "Title: Z to A",
      function: sortByZToA
  },
]