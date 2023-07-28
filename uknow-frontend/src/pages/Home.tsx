import CourseList from "../elements/CourseList"
import { Typography, } from '@mui/material';
import SearchBar from '../components/SearchBar';

function Home() {


  return (
    <div>
        <SearchBar />
        <CourseList/>
          <Typography >
              HOME AGAIN
          </Typography>
       
    </div>
  )
}

export default Home