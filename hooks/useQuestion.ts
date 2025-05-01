// hooks/useQuestion.ts
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export const useQuestion = (id: string) => {
  const [question, setQuestion] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      const { data, error } = await supabase
        .from('questions') // or 'challenges'
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        setError(error.message);
      } else {
        setQuestion(data);
      }

      setLoading(false);
    };

    if (id) fetchQuestion();
  }, [id]);

  return { question, loading, error };
};
