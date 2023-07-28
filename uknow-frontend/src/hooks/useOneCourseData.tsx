import CourseData from '../interfaces/course.interface';
import { useParams } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";

const useOneCourseData = () => {
  const { _id } = useParams();

  const { isLoading, isError, data: oneCourse } = useQuery<CourseData>({
    queryKey: ['course', _id],
    queryFn: async (): Promise<CourseData> => {
      const response = await fetch(`http://localhost:3000/courses/${_id}`);
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
