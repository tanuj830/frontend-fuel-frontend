import { supabase } from '@/lib/supabaseClient';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;

  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  if (!uuidRegex.test(slug)) {
    return {
      title: 'Invalid Question ID | GreatReact',
      description: 'The question ID provided is not valid.',
    };
  }

  const { data: question, error } = await supabase
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
  };
}

export default function AlgoQuestionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
