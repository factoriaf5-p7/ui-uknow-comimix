import {CourseList} from "../elements/CourseList"
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
          <Typography variant='uTitle'>
                HOME AGAIN
            </Typography>
       
    </div>
  )
}

export default Home