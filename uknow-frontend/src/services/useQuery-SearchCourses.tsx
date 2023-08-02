
import { useQuery } from "@tanstack/react-query";


export const SearchCourses = (searchText: string) => {
  const { isLoading, isError, data: searchResults } = useQuery({
    queryKey: ["searchCourses", searchText], 
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3000/courses/search?filters=name&keywords=${searchText}`
      );
      const data = await response.json();
      return data.data;
    },
    enabled: searchText !== "",
  });

  return {
    isLoading,
    isError,
    searchResults,
  };
};
