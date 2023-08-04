import MDEditor from '@uiw/react-md-editor';
import { Container } from '@mui/system';
import Box from '@mui/system/Box';
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer';
import { AuthContext } from '../../context/AuthContext';
import { useContext, useState } from 'react';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { UknowTheme } from '../../themes/ThemeUknow';
import { InputLabel, Select, MenuItem } from '@mui/material'
import { FormEvent } from 'react';
import useAddCourseMutation from '../../services/useAddCourseMutation';

function CreateCourseForm() {
  const { user } = useContext(AuthContext);

  const [content, setContent] = useState();
  const [newCourse, setNewCourse] = useState({
    userId: '',
    name: '',
    description: '',
    topic: '',
    difficulty: '',
    image: '',
    tags: '',
    content: ''
  });

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCourse({
      ...newCourse,
      [name]: value,
    });
  }

  const addCourseMutation = useAddCourseMutation();
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    newCourse.userId = user._id;
    newCourse.content = content;
    newCourse.tags = String(newCourse.tags).split(',');
    setNewCourse({
      ...newCourse
    });

    // console.log('course MUtation', addCourseMutation)
    addCourseMutation.mutate(newCourse);
  }

  return (
    <>
    <Navbar />
    <Container sx={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', marginTop: '80px', display: 'flex', justifyContent: 'center', maxWidth: '80%' }}>
      <Box maxWidth="sm" width="100%" component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <h1 style={{ textAlign: "center" }}>New course</h1>
            <TextField
              label="Name"
              name="name"
              value={newCourse.name}
              onChange={handleChangeInput}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Description"
              name="description"
              value={newCourse.description}
              onChange={handleChangeInput}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <InputLabel id="topic-label">Topic</InputLabel>
                <Select labelId="topic-label" id="topic" name="topic" value={newCourse.topic} label="Topic" onChange={handleChangeInput}>
                  <MenuItem value='Web Development'>Web Development</MenuItem>
                  <MenuItem value='Frontend'>Frontend</MenuItem>
                  <MenuItem value='Backend'>Backend</MenuItem>
                </Select>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <InputLabel id="difficulty-label">Difficulty</InputLabel>
                <Select labelId="difficulty-label" id="difficulty" name="difficulty" value={newCourse.difficulty} label="Difficulty" onChange={handleChangeInput}>
                  <MenuItem value='Beginner'>Beginner</MenuItem>
                  <MenuItem value='Medium'>Medium</MenuItem>
                  <MenuItem value='Advanced'>Advanced</MenuItem>
                </Select>
              </Box>
            </Box>

            <TextField
              label="Image"
              name="image"
              value={newCourse.image}
              onChange={handleChangeInput}
              fullWidth
              margin="normal"
            />

            <TextField
              label="Tags"
              name="tags"
              value={newCourse.tags}
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
      </Box>
    </Container>
    <Footer />
    </>
  )
}

export default CreateCourseForm;