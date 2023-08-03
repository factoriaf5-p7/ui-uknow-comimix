import { useContext } from 'react';
import { APIErrorContext } from '../context/APIErrorContext';

export function useAPIError() {
    const { error, addError, removeError } = useContext(APIErrorContext);
    return { error, addError, removeError };
  }