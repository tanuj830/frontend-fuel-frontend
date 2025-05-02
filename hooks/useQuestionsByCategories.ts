import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient'; 

const CATEGORY_NAMES = ['UI coding', 'JS functions', 'Algo coding'];

export const useQuestionsByCategories = () => {
  const [questions, setQuestions] = useState<any[]>([]);
  const [uiQuestions, setUIQuestions] = useState<any[]>([]);
  const [algoQuestions, setAlgoQuestions] = useState<any[]>([]);
  const [jsQuestions, setJSQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from('questions')
        .select('*, categories(name)')
        .in('categories.name', CATEGORY_NAMES);

      if (error) {
        console.error('Error fetching questions:', error.message);
        setError(error.message);
        setQuestions([]);
      } else {
        setQuestions(data || []);
      }

      setLoading(false);
      
      if(data){
        const ui:any = []
        const algo:any = []
        const js:any = []

        data.map((question:any)=>{
          if(question.categories.name === "UI coding")ui.push(question)
          else if(question.categories.name === "Algo coding")algo.push(question)
          else if(question.categories.name === "JS functions")js.push(question)
        })
      setUIQuestions(ui)
      setAlgoQuestions(algo)
      setJSQuestions(js)

      console.log(algo, "d")
      }
    };

    fetchQuestions();

  }, []);

  return { questions, loading, error , uiQuestions, algoQuestions, jsQuestions};
};
