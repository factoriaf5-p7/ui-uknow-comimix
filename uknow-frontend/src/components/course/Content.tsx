import { Box } from "@mui/system";
import BuyButton from "../buttons/BuyButton";
import CourseContent from "./CourseContent";
import CourseDetails from "./CourseDetails";
import CourseHeader from "./CourseHeader";
import useOneCourseData from "../../services/useOneCourseData";
import { CourseData } from "../../interfaces/course.interface";

interface ContentProps {
  course: CourseData;
}

const Content = ({ course }: ContentProps) => {
  const { oneCourse, isLoading, error } = useOneCourseData(course._id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={4}>
      <CourseHeader name={oneCourse?.name} description={oneCourse?.description} />
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        width="100%"
        alignItems="center"
      >
        <Box flexBasis="48%">
          {oneCourse ? <CourseDetails course={oneCourse} /> : <div>No course details available</div>}
        </Box>
        {oneCourse ? (
          <Box flexBasis="48%">
            <CourseContent content={oneCourse.content} />
          </Box>
        ) : (
          <div>No course content available</div>
        )}
      </Box>
      <BuyButton courseId={oneCourse?._id} />
    </Box>
  );
};

export default Content;
