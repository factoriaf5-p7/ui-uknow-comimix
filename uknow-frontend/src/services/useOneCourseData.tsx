import { useQuery } from "@tanstack/react-query";
import { CourseData } from '../interfaces/course.interface';

const useOneCourseData = (_id: string) => {
  const { data: oneCourse, isLoading, error  } = useQuery<CourseData>({
    queryKey: ['course', _id],
    queryFn: async (): Promise<CourseData> => {
      const response = await fetch(`http://localhost:3000/courses/${_id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch course data');
      }
      const data = await response.json();
<<<<<<< HEAD
=======
      console.log('inquery', data.data)
>>>>>>> createcourse/raul
      return data.data;
    },
    staleTime: 3000000,
  });

  return {
    oneCourse,
    isLoading,
    error,
    
  };
};

export default useOneCourseData;
