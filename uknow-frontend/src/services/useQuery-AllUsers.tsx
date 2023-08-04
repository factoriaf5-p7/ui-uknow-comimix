import { useQuery } from "@tanstack/react-query";
import { User} from "../interfaces/user.interface";

export const useUserProfile = () => {

  
    const { isLoading, isError, data: userProfile } = useQuery({
      queryKey: ['users'],
      queryFn: async (): Promise<User> => {
        const response = await fetch('http://localhost:3000/users/profile',
         {headers: {
            "authorization": "Bearer " + localStorage.getItem("token")
            }
          });
        const data = await response.json();
        return data.data;
      },
      staleTime: 3000000,
    });
  
    return {
      isLoading,
      isError,
      userProfile,
    };
  };