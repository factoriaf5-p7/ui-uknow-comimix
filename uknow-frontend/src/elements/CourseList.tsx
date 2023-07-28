import { Box } from '@mui/material';
import { CardProduct } from './CardProduct';
import { useAllCourses } from '../hooks/useQuery-AllCourses';

export default function CourseList() {
  const { isLoading, isError, courseList } = useAllCourses();

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>An error has occurred while retrieving the data.</div>;

  return (
    <Box display="flex" justifyContent="center">
      <Box display="flex" flexDirection="column" alignItems="center">
        {courseList?.map((course) => (
          <Box
            key={course._id} xs={2} 
            my={2}
            mb={5}
            style={{ width: '330px', height: '450px' }}
          >
            <CardProduct courseData={course} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
