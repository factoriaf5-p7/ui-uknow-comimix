import Navbar from '../components/navbar/Navbar';
import { useLocation } from 'react-router-dom';
import CourseDetails from '../components/course/CourseDetails';
import Footer from '../components/footer/Footer';
import CourseHeader from '../components/course/CourseHeader';

const Course = () => {

  const location = useLocation()
  const course = location.state
  return (
    <>
      <Navbar />
      <CourseHeader name={''}/>
      <CourseDetails course={course}/>
      <Footer/>
    </>
  );
}

export default Course;