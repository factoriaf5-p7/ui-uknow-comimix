import CourseList from "../elements/CourseList"
import {RegistrationForm} from "../elements/RegistrationForm"
import React, { useEffect, useState} from 'react'
import { uColors } from '../themes/ThemeUknow';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import SearchBar from '../components/SearchBar';

function Home() {


  return (
    <div>
        <SearchBar />
        <CourseList/>
        {/*  <Typography variant='uTitle'>
                HOME AGAIN
            </Typography>
        {
            data.map(course => {
                return <Box style={{ color: uColors.uOrange }} >{course.name}</Box>
            })
        } */}
    </div>
  )
}

export default Home