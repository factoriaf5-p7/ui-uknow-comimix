import { useQuery } from "@tanstack/react-query";
import { User} from "../interfaces/user.interface";

export const UserId = () => {
    const { isLoading, isError, data: userId } = useQuery({
      queryKey: ['userID'],
      queryFn: async (): Promise<User[]> => {
        const response = await fetch('http://localhost:3000/users/profile');
        const data = await response.json();
        return data.data;
      },
      staleTime: 3000000,
    });
  
    return {
      isLoading,
      isError,
      userId,
    };
  };