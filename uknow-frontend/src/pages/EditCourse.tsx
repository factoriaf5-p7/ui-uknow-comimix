import React from 'react'
import MDEditor from '@uiw/react-md-editor';

import { Box, Container } from '@mui/system';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

function EditCourse() {
  return (
    <>
    <Navbar />
    <Container sx={{ marginTop: '80px', display: 'flex', justifyContent: 'center', maxWidth: '80%', border: '1px solid green' }}>
      <Box sx={{ border: '1px soild orange' }}>
        <MDEditor style={{ width: '100%' }}/>
      </Box>

    </Container>
    <Footer />
    </>
  )
}

export default EditCourse;