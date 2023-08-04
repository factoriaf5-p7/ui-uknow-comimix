import { useMutation } from "@tanstack/react-query"; // Make sure to import from 'react-query' directly
import { useNavigate } from "react-router-dom";
import { useQueryClient } from '@tanstack/react-query'

interface DeleteCourseVariables {
    userId: string;
    _id: string;
}

const useDeleteCourseMutation = () => {
    const navigate = useNavigate();

    const deleteCourse = async ( deleteCourseDto: DeleteCourseVariables) => {
        const response = await fetch(`http://localhost:3000/courses/delete`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(deleteCourseDto)
        });
      
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || "Error creating course");
        }

        const result = await response.json();
        return result;
    }

    const queryClient = useQueryClient();

    const mutation = useMutation(deleteCourse, {
      onSuccess: () => {
        navigate('/dashboard');
        queryClient.invalidateQueries("users");
      },
      onError: (error: Error) => {
        throw new Error(error.message | 'Error while creating course');
      },
    });

    return mutation;
};

export default useDeleteCourseMutation;