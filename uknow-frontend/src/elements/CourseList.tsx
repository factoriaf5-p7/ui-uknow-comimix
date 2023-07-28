import { CardProduct } from './CardProduct';
import { useCourseData } from '../hooks/useQuery-CourseData';
import { Grid } from '@mui/material';

export default function CourseList() {
  const { isLoading, isError, courseList } = useCourseData();

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>An error has occurred while retrieving the data.</div>;

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Grid container spacing={2}>
        {courseList?.map((course) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={course._id}>
            <CardProduct courseData={course} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
