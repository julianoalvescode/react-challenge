import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../react-query";
import { ReactNode } from 'react';

export const createWrapper = () => {
  
  return ({ children }: {children: ReactNode}) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
