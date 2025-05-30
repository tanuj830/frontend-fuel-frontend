
import { supabase } from '@/lib/supabaseClient';

export async function generateMetadata({params}: {params: Promise<{ id: string }>}) {
    const { slug }:any = await params;
  
    const { data: question, error }:any = await supabase
      .from('questions')
      .select('title, short_description')
      .eq('id', slug)
      .single();
  
    if (error || !question) {
      return {
        title: 'Question Not Found | GreatReact',
        description: 'Explore ui coding questions on GreatReact.',
      };
    }
  
    return {
      title: `${question.title} | GreatReact`,
      description: question.short_description || 'UI coding question on GreatReact.',
      openGraph: {
        title: question.title,
        description: question.short_description || '',
      },
      keywords: ['frontend', 'ui questions', 'react', 'next.js', 'GreatReact'],
    };
  }

export default function UIQuestionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
