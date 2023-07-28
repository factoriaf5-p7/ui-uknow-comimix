import { useQuery } from "@tanstack/react-query";
import { CourseData } from "../interfaces/course.interface";

export const useCourseData = () => {
    const { isLoading, isError, data: courseList } = useQuery({
      queryKey: ['courses'],
      queryFn: async (): Promise<CourseData[]> => {
        const response = await fetch('http://localhost:3000/courses/average');
        const data = await response.json();
        return data.data;
      },
      staleTime: 3000000,
    });
  
    return {
      isLoading,
      isError,
      courseList,
    };
  };