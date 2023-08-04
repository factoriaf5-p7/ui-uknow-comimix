import { useMutation } from "@tanstack/react-query"; // Make sure to import from 'react-query' directly
import { NewCourseData } from "../interfaces/new_course.interface";
import { useNavigate } from "react-router-dom";
import { queryClient } from "../main";

interface AddCourseVariables {
    userId: string;
    newCourse: NewCourseData;
}

const useAddCourseMutation = () => {
    const navigate = useNavigate();

    const addCourse = async ({ userId, ...newCourse }: AddCourseVariables) => {
        const response = await fetch(`http://localhost:3000/courses/create/${userId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newCourse),
        });
      
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || "Error creating course");
        }

        const result = await response.json();
        return result;
    }

    const queryClient = useQueryClient();

    const mutation = useMutation(addCourse, {
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

export default useAddCourseMutation;




