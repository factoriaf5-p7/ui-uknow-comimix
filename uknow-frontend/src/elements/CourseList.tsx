import { Box, Grid, Link } from '@mui/material';
import { CardProduct } from './CardProduct';
import { useAllCourses } from '../hooks/useQuery-AllCourses';

export default function CourseList() {
  const { isLoading, isError, courseList } = useAllCourses();

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>An error has occurred while retrieving the data.</div>;

  return (
    <Box display="flex" justifyContent="center" mb={10} >
      <Grid container spacing={3} justifyContent="center" >
        {courseList?.map((course) => (
          <Grid item key={course._id} sx={{ display: { xs: 'none', sm: 'block' } }} component="div">
            <Link to={`/course/${course._id}`}> 
              <Box my={2} style={{ width: '330px', height: '450px' }}>
                <CardProduct courseData={course} />
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
