import { useQuery } from "@tanstack/react-query";
import { CourseData } from "../interfaces/course.interface";

interface Props {
    userId: string;
}

export const useCreatedCourses = ( userId: Props ) => {
    const { isLoading, isError, data: courseList } = useQuery({
      queryKey: ['createdCourses'],
      queryFn: async (): Promise<CourseData[]> => {
        const response = await fetch(`http://localhost:3000/courses/created-courses/${userId}`);
        const data = await response.json();
        return data.data;
      },
      enabled: true,
      staleTime: 3000000,
      structuralSharing: false
    });
  
    return {
      isLoading,
      isError,
      courseList,
    };
  };