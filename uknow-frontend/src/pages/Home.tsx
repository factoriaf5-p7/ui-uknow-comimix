import React, { useEffect, useState} from 'react'
import { uColors } from '../themes/ThemeUknow';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import SearchBar from '../components/SearchBar';

function Home() {

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     const getData = async () => {
    //         const response = await fetch('http://localhost:3000/courses/average');
    //         const data = await response.json();
    //         setData(data.data);
    //         console.log(data.data);
    //     }

    //     getData();
    // }, []);

  return (
    <div>
         <Typography variant='uTitle'>
            HOME AGAIN
        </Typography>
        <SearchBar />
        {/* {
            data.map(course => {
                return <Box style={{ color: uColors.uOrange }} >{course.name}</Box>
            })
        } */}
    </div>
  )
}

export default Home