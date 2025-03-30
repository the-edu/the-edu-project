import { ReactNode } from 'react';

import { QueryProvider } from './query-provider';

interface Props {
  children: ReactNode;
}

export const GlobalProvider = ({ children }: Props) => {
  return <QueryProvider>{children}</QueryProvider>;
};
