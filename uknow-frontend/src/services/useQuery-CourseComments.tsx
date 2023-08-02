
import { useQuery } from "@tanstack/react-query";
import { Comment } from '../interfaces/comment.interface';



  export const useCourseComments = (course_id:string) => {
    const { isLoading, isError, data: comments } = useQuery({
        queryKey:  ['comments', course_id],
        queryFn: async (): Promise<Comment[]> => {
            const response = await fetch(`http://localhost:3000/comments/${course_id}`);
            const data = await response.json();
            return data.data;
          },
        });
      
        return {
          isLoading,
          isError,
          comments,
        };
      };