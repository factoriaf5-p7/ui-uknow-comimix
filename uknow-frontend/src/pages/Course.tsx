import Navbar from '../components/navbar/Navbar';
import { useLocation } from 'react-router-dom';
import CourseDetails from '../components/course/CourseDetails';
import Footer from '../components/footer/Footer';
import CourseHeader from '../components/course/CourseHeader';
import CourseContent from '../components/course/CourseContent';
import CommentsSection from '../components/course/CourseCommentsSection';
import CourseNewComment from '../components/course/CourseNewComment';


const Course = () => {

  const location = useLocation()
  const course = location.state;

  return (
    <>
    <div style={{padding : ' 0 0 7% 0'}}>
      <Navbar />
      <CourseHeader course={course}/>
      <CourseDetails course={course}/>
      <CourseContent course={course}/>
      <CommentsSection courseId={course._id}/>
      <CourseNewComment course={course}/>
      <Footer/>
      </div>
    </>
  );
}

export default Course;