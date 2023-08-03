import { useQuery } from "@tanstack/react-query";
import { CourseData } from "../interfaces/course.interface";

export const useAllUsers = () => {
    const { isLoading, isError, data: usersList } = useQuery({
      queryKey: ['users'],
      queryFn: async (): Promise<UsersData[]> => {
        const response = await fetch('http://localhost:3000/users');
        const data = await response.json();
        return data.data;
      },
      staleTime: 3000000,
    });
  
    return {
      isLoading,
      isError,
      usersList,
    };
  };