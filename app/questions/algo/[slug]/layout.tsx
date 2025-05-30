
import { generateMetadata as generateMetadataFromServer } from './metadata-server';

export const generateMetadata = generateMetadataFromServer;

  export default function AlgoQuestionLayout({
    children,

  }: {
    children: React.ReactNode;

  }) {
    return <>{children}</>;
  }
  
