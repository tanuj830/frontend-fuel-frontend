// app/questions/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Browse Questions | GreatReact',
  description:
    'Explore a curated list of UI and coding questions categorized by difficulty and topic.',
  openGraph: {
    title: 'UI and Coding Questions | GreatReact',
    description:
      'Practice coding questions across categories like Algorithms, UI, and JavaScript functions.',
    type: 'website',
  },
  keywords: [
    'coding questions',
    'javascript',
    'algorithms',
    'ui coding',
    'react',
    'next.js',
  ],
};

export default function QuestionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
