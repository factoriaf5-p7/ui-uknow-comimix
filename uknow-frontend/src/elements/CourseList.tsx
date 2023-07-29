import { Box, Grid } from '@mui/material';
import { CardProduct } from './CardProduct';
import { useNavigate } from 'react-router-dom';
import { CourseData } from '../interfaces/course.interface';

interface CourseListProps {
  courseList: CourseData[];
}

export default function CourseList({ courseList }: CourseListProps) {
  const navigate = useNavigate();

  const handleCardClick = (courseId: string) => {
    navigate(`/course/${courseId}`);
  };

  if (!courseList) return <div>No courses found.</div>;

  return (
    <Box display="flex" justifyContent="center" m={10}>
      <Grid container spacing={3} justifyContent="center">
        {courseList.map((course) => (
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
