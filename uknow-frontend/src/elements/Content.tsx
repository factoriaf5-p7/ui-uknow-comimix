
import { Box } from "@mui/system";
import BuyButton from "../components/BuyButton";
import CourseContent from "../components/CourseContent";
import CourseDetails from "../components/CourseDetails";
import CourseHeader from "../components/CourseHeader";
import useOneCourseData from "../hooks/useOneCourseData";


const Content = () => {
  const { isLoading, isError, oneCourse } = useOneCourseData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !oneCourse) {
    return <div>Error al cargar el curso.</div>;
  }

  const isValidToken = () => {
    const token = localStorage.getItem('token');
    return token 
  };



  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={4}>
      <CourseHeader name={oneCourse.name} description={oneCourse.description} />
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        width="100%"
        alignItems="center"
      >
        <Box flexBasis="48%">
          <CourseDetails course={oneCourse} />
        </Box>
        {isValidToken() && (
          <Box flexBasis="48%">
            <CourseContent content={oneCourse.content} />
          </Box>
        )}
      </Box>
      <BuyButton courseId={oneCourse._id}/>
    </Box>
  );
};


export default Content;
