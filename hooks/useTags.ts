// hooks/useTags.ts
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

export const useTags = () => {
  const [tagsMap, setTagsMap] = useState<{ [key: string]: any[] }>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTags = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('question_tags')
        .select('question_id, tags(*)');
      if (!error && data) {
        const tagMap: { [key: string]: any[] } = {};
        data.forEach((item) => {
          if (!tagMap[item.question_id]) {
            tagMap[item.question_id] = [];
          }
          tagMap[item.question_id].push(item.tags);
        });
        setTagsMap(tagMap);
      }
      setLoading(false);
    };

    fetchTags();
  }, []);

  return { tagsMap, loading };
};
