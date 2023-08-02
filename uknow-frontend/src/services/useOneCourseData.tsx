

import { useQuery } from "@tanstack/react-query";
import { CourseData } from '../interfaces/course.interface';

const useOneCourseData = (course_id:string) => {
  

  const { isLoading, isError, data: oneCourse } = useQuery<CourseData>({
    queryKey: ['course',course_id],
    queryFn: async (): Promise<CourseData> => {
      const response = await fetch(`http://localhost:3000/courses/${course_id}`);
      const data = await response.json();
      console.log(data.data);
      return data.data;
    },
    staleTime: 3000000,
  });

  return {
    isLoading,
    isError,
    oneCourse,
  };
};

export default useOneCourseData;
