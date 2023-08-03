import Navbar from '../components/navbar/Navbar';
import { useLocation } from 'react-router-dom';
import CourseDetails from '../components/course/CourseDetails';

const Course = () => {

  const location = useLocation()
  const course = location.state
  return (
    <>
      <Navbar />
      <CourseDetails course={course}/>
    </>
  );
}

export default Course;