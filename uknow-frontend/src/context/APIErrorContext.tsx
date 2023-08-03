import { useState, useCallback, createContext, ReactNode } from 'react';

interface APIError {
    message: string;
    status: number;
  }
  
  interface APIErrorContextValue {
    error: APIError | null;
    addError: (message: string, status: number) => void;
    removeError: () => void;
  }
  
  export const APIErrorContext = createContext<APIErrorContextValue>({
    error: null,
    addError: () => {},
    removeError: () => {}
  });
  
  interface APIErrorProviderProps {
    children: ReactNode;
  }
  
  export default function APIErrorProvider({ children }: APIErrorProviderProps) {
    const [error, setError] = useState<APIError | null>(null);
  
    const removeError = () => setError(null);
  
    const addError = (message: string, status: number) => setError({ message, status });
  
    const contextValue: APIErrorContextValue = {
      error,
      addError: useCallback((message: string, status: number) => addError(message, status), []),
      removeError: useCallback(() => removeError(), [])
    };
  
    return (
      <APIErrorContext.Provider value={contextValue}>
        {children}
      </APIErrorContext.Provider>
    );
  }