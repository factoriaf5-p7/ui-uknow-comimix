import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useAddCommentMutation } from '../../services/useAddCommentMutation';
import { AuthContext } from '../../context/AuthContext';
import { CourseData } from '../../interfaces/course.interface';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

interface CourseNewCommentProps {
  course: CourseData;
}

const CourseNewComment = ({ course }: CourseNewCommentProps) => {
  const { user } = useContext(AuthContext);

  const [commentText, setCommentText] = useState('');
  const addCommentMutation = useAddCommentMutation();
    const navigate = useNavigate()
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentText(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (commentText.trim() !== '') {
      try {
        await addCommentMutation.mutateAsync({
          text: commentText,
          user_id: user._id,
          course_id: course._id
          
        });
       
        setCommentText('');
        navigate("/course", {
            state: course
        })
      } catch (error) {
        console.error('Error adding comment:', error);
      }
    }
  };

  // Check if the user already commented on the course


  return (
    <Paper elevation={3} sx={{ p: 3, mt: 4, mx: 'auto', maxWidth: 600 }}>
      <Typography variant="h6" gutterBottom>
        New Comment
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Escribe tu comentario aquí"
          variant="outlined"
          value={commentText}
          onChange={handleChange}
          fullWidth
          multiline
          rows={3}
          sx={{ mb: 2 }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Agregar Comentario
        </Button>
      </form>
    </Paper>
  );
};

export default CourseNewComment;