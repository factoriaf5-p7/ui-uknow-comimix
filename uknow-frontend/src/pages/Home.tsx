import React, { useEffect, useState} from 'react'
import { uColors } from '../themes/ThemeUknow';
import { Box } from '@mui/system';

function Home() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://localhost:3000/courses');
            const data = await response.json();
            setData(data.data);
        }

        getData();
    }, []);

  return (
    <div>
        {
            data.map(course => {
                return <Box style={{ color: uColors.uOrange }} >{course.name}</Box>
            })
        }
    </div>
  )
}

export default Home