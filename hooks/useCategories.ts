// hooks/useCategories.ts
"use client"
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

export const useCategories = () => {
  const [categories, setCategories] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      const { data, error } = await supabase.from('categories').select('*');
      if (!error && data) {
        const categoryMap = data.reduce((acc: any, cat: any) => {
          acc[cat.id] = cat.name;
          return acc;
        }, {});
        setCategories(categoryMap);
      }
      setLoading(false);
    };

    fetchCategories();
  }, []);

  return { categories, loading };
};
