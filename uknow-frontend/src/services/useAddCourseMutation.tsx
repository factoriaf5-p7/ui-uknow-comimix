import { useMutation, } from "@tanstack/react-query"; // Make sure to import from 'react-query' directly
import { NewCourseData } from "../interfaces/new_course.interface";

interface Props {
    userId: string;
    newCourse: NewCourseData;
}

const addCourseMutation = async ({ userId, ...newCourse }: Props) => {
    console.log('new course',newCourse)
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
};

export const useAddCourseMutation = () => {
  return useMutation(addCourseMutation, {
    onSuccess: () => {
      console.log("New course created")
    },
  });
};




