import { useMutation, useQueryClient } from '@tanstack/react-query';
import UpdateProfileState from '../interfaces/profile.interface';


export const useUserProfileMutation = () => {
  


  const updateUserProfile = async (userData: UpdateProfileState) => {
    
    const response = await fetch(`http://localhost:3000/users`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data;
  };

      const queryClient = useQueryClient(); 

  const mutation = useMutation(updateUserProfile, {
    onSuccess: () => {
      
      queryClient.invalidateQueries(["users"]);
    },
    onError: (error: any) => {
      console.error('Registration error:', error);
    },
  });

  return mutation;
};
