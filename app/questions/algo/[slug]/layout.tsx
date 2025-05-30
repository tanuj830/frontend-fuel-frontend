
import { supabase } from '@/lib/supabaseClient';

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const { slug } = params;
  
    const { data: question, error }:any = await supabase
      .from('questions')
      .select('title, short_description')
      .eq('id', slug)
      .single();
  
    if (error || !question) {
      return {
        title: 'Question Not Found | GreatReact',
        description: 'Explore algorithm coding questions on GreatReact.',
      };
    }
  
    return {
      title: `${question.title} | GreatReact`,
      description: question.short_description || 'Algorithm coding question on GreatReact.',
      openGraph: {
        title: question.title,
        description: question.short_description || '',
      },
      keywords: ['algorithms', 'coding questions', 'dsa', 'javascript', 'GreatReact'],
    };
  }

  export default function AlgoQuestionLayout({
    children,
    params,
  }: {
    children: React.ReactNode;
    params: { slug: string };
  }) {
    return <>{children}</>;
  }
  
