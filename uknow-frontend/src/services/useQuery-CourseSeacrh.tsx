import { useQuery } from "@tanstack/react-query";


export const useCourseSearch = (searchText: string) => {
  return useQuery({
    queryKey: ['courses', searchText],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/courses/search?filters=name&keywords=${searchText}`);
      const data = await response.json();
      return data.data;
    },
    staleTime: 3000000,
  });
};
