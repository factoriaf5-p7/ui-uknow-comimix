import { useMutation, } from "@tanstack/react-query"; // Make sure to import from 'react-query' directly
import { Comment } from '../interfaces/comment.interface';


const addCommentMutation = async (newComment: Comment) => {
  const response = await fetch('http://localhost:3000/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newComment),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Login failed");
  }

  const result = await response.json();
  return result;
};

export const useAddCommentMutation = () => {


  return useMutation(addCommentMutation, {
    onSuccess: () => {
      console.log("New comment created")
    },
  });
};




