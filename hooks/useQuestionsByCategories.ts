import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient'; 

const CATEGORY_NAMES = ['UI coding', 'JS functions', 'Algo coding'];

export const useQuestionsByCategories = () => {
  const [questions, setQuestions] = useState<any[]>([]);
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
    };

    fetchQuestions();
  }, []);

  return { questions, loading, error };
};
