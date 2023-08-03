import { useMutation, useQueryClient } from '@tanstack/react-query';

interface updateCourseData {
    userId: string;
    _id: string;
    name: string;
    description: string;
    topic: string;
    difficulty: string;
    image: string;
    tags: string[];
    content: string;
}

export const useCourseUpdateMutation = () => {

  const updateCourse = async ({ userId, ...course }: updateCourseData) => {
    try{
        const response = await fetch(`http://localhost:3000/courses/${userId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(course),
        });
        const data = await response.json();

        // console.log(data)
        return data;
    }catch(e) {
        console.log(e);
    }
  };

  const queryClient = useQueryClient();
  const mutation = useMutation(updateCourse, {
    onSuccess: () => {
        queryClient.invalidateQueries("course");
    },
    onError: (error: any) => {
      console.error('Error updating course:', error);
    },
  });

  return mutation;
};
