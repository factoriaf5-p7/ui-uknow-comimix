import { useMutation, } from "@tanstack/react-query"; // Make sure to import from 'react-query' directly
import { NewCourseData } from "../interfaces/new_course.interface";
import { useNavigate } from "react-router-dom";

interface Props {
    userId: string;
    newCourse: NewCourseData;
}

const useAddCourseMutation = async ({ userId, ...newCourse }: Props) => {
    const navigate = useNavigate();

    const addCourse = async () => {
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

    const mutation = useMutation(addCourse, {
        onSuccess: () => {
            navigate('/dashboard');
        },
        onError: (e) => {
            throw new Error(e.message | 'Error creating course');
        }
    });
    
    return mutation;
};

export default useAddCourseMutation;




