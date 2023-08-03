import { Box, Grid } from '@mui/material';
import { CardProduct } from '../cards/CardProduct';
import { useNavigate } from 'react-router-dom';
import { CourseData } from '../../interfaces/course.interface';
import BtnPruevaCurso from '../buttons/BtnPruevaCurso';

interface CourseListProps {
  courses: CourseData[] | undefined;
}

export default function CourseList({ courses }: CourseListProps ) {
  const navigate = useNavigate();

  const handleCardClick = (courseId: string) => {
    navigate(`/course/${courseId}`);
  };

  // if (!courses || courses.length === 0) {
  //   return <div>No courses found.</div>;
  // }

  return (
    <Box display="flex" justifyContent="center" m={10}>
      <Grid container spacing={3} justifyContent="center">
        {courses&&courses.map((course) => (
          <Grid item key={course._id} sx={{ display: { xs: 'none', sm: 'block' } }} component="div">
            <Box my={2} style={{ width: '330px', height: '450px' }}>
              <CardProduct courseData={course} onCardClick={() => handleCardClick(course._id)} />
              <BtnPruevaCurso key={course._id} course={course} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
