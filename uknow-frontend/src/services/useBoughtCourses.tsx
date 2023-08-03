import { useQuery } from "@tanstack/react-query";
import { CourseData } from "../interfaces/course.interface";

interface Props {
    userId: string;
}

export const useBoughtCourses = ( userId: string ) => {
    const { isLoading, isError, data: courseList } = useQuery({
      queryKey: ['boughtCourses'],
      queryFn: async (): Promise<CourseData[]> => {
        const response = await fetch(`http://localhost:3000/courses/bought-courses/${userId}`);
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