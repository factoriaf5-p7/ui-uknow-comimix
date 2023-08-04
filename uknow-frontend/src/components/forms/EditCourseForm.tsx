import React, { useEffect } from 'react'
import MDEditor from '@uiw/react-md-editor';
import { Box, Container } from '@mui/system';
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer';
import { AuthContext } from '../../context/AuthContext';
import useOneCourseData from '../../services/useOneCourseData';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { UknowTheme } from '../../themes/ThemeUknow';
import { InputLabel, Select, MenuItem } from '@mui/material'
import { FormEvent } from 'react';
import { useCourseUpdateMutation } from '../../services/useMutation-UpdateCourse';

function EditCourseForm() {
  const { user, isLogged } = useContext(AuthContext);
  const navigate = useNavigate();

  const location = useLocation();
  const courseId = location.state;
  const { isLoading, isError, oneCourse } = useOneCourseData(courseId);

  const [content, setContent] = useState();
  const [updatedCourse, setUpdatedCourse] = useState({
    userId: '',
    _id: '',
    name: '',
    description: '',
    topic: '',
    difficulty: '',
    image: '',
    tags: '',
    content: ''
  });

  useEffect (() => {
    // if(!isLogged) navigate('/login');
        if(!isLoading){
            setUpdatedCourse({
                userId: user._id,
                _id: courseId,
                name: oneCourse.name,
                description: oneCourse.description, 
                topic: oneCourse.topic,
                difficulty: oneCourse.difficulty,
                image: oneCourse.image,
                tags: oneCourse.tags,
                content: oneCourse.content
            });
            setContent(oneCourse.content);
        }
  }, [isLoading]);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedCourse({
      ...updatedCourse,
      [name]: value,
    });
  }

  const updateCourseMutation = useCourseUpdateMutation();
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updatedCourse.content = content;
    updatedCourse.tags = String(updatedCourse.tags).split(',');
    setUpdatedCourse({
      ...updatedCourse
    });

    // console.log('Edit course', courseId);
    updateCourseMutation.mutate(updatedCourse);
  }

  return (
    <>
    <Navbar />
    <Container sx={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', marginTop: '80px', display: 'flex', justifyContent: 'center', maxWidth: '80%' }}>
      <Box maxWidth="sm" width="100%" component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          {isLoading ?
            <div>Loading...</div>
          :
          isError ?
            <div>Error retrieving the course</div>
          :
          <>
            <h1 style={{ textAlign: "center" }}>Edit course</h1>
            <TextField
              label="Name"
              name="name"
              value={updatedCourse.name}
              onChange={handleChangeInput}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Description"
              name="description"
              value={updatedCourse.description}
              onChange={handleChangeInput}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <InputLabel id="topic-label">Topic</InputLabel>
                <Select labelId="topic-label" id="topic" name="topic" value={updatedCourse.topic} label="Topic" onChange={handleChangeInput}>
                  <MenuItem value='Web Development'>Web Development</MenuItem>
                  <MenuItem value='Frontend'>Frontend</MenuItem>
                  <MenuItem value='Backend'>Backend</MenuItem>
                </Select>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <InputLabel id="difficulty-label">Difficulty</InputLabel>
                <Select labelId="difficulty-label" id="difficulty" name="difficulty" value={updatedCourse.difficulty} label="Difficulty" onChange={handleChangeInput}>
                  <MenuItem value='Beginner'>Beginner</MenuItem>
                  <MenuItem value='Medium'>Medium</MenuItem>
                  <MenuItem value='Advanced'>Advanced</MenuItem>
                </Select>
              </Box>
            </Box>

            <TextField
              label="Image"
              name="image"
              value={updatedCourse.image}
              onChange={handleChangeInput}
              fullWidth
              margin="normal"
            />

            <TextField
              label="Tags"
              name="tags"
              value={updatedCourse.tags}
              onChange={handleChangeInput}
              fullWidth
              margin="normal"
            />
   
          <Box sx={{ border: '1px soild orange' }}>
            <MDEditor value={content} onChange={setContent} name='content' style={{ width: '100%' }} />
          </Box>

          <Box display="flex" justifyContent="center" mt={2} >
              <Button type="submit" variant="contained" color="primary" style={{ backgroundColor: UknowTheme.palette.uOrange.main, color: '#fff' }} sx={{ fontSize: '1rem', padding: '0.8rem 3rem' }}>
                Save
              </Button>
          </Box>
        </>
        }
      </Box>
    </Container>
    <Footer />
    </>
  )
}

export default EditCourseForm;