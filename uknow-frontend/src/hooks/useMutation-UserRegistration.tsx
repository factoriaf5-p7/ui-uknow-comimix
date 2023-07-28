import { useMutation } from '@tanstack/react-query';
import RegisterState from '../interfaces/register.interface';
import { useNavigate } from 'react-router-dom';

export const useUserRegistrationMutation = () => {
  const navigate = useNavigate();


  const createUser = async (userData: RegisterState) => {
    const response = await fetch('http://localhost:3000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data;
  };

    /*   const queryClient = useQueryClient(); */

  const mutation = useMutation(createUser, {
    onSuccess: () => {
      navigate('/login');
      /*queryClient.invalidateQueries("users");*/
    },
    onError: (error: any) => {
      console.error('Registration error:', error);
    },
  });

  return mutation;
};
