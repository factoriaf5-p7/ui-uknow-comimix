import { Box, Grid } from '@mui/material';
import { CardProduct } from './CardProduct';
import { useAllCourses } from '../hooks/useQuery-AllCourses';
import { useNavigate } from 'react-router-dom';

export default function CourseList() {
  const { isLoading, isError, courseList } = useAllCourses();
  const navigate = useNavigate();

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>An error has occurred while retrieving the data.</div>;

  const handleCardClick = (courseId: string) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <Box display="flex" justifyContent="center" m={10}>
      <Grid container spacing={3} justifyContent="center">
        {courseList?.map((course) => (
          <Grid item key={course._id} sx={{ display: { xs: 'none', sm: 'block' } }} component="div">
            <Box my={2} style={{ width: '330px', height: '450px' }}>
              <CardProduct courseData={course} onCardClick={() => handleCardClick(course._id)} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
