import { useState, useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import { CardProduct } from './CardProduct';
import { useNavigate } from 'react-router-dom';
import { CourseData } from '../interfaces/course.interface';

interface CourseListProps {
  initialCourses: CourseData[];
  showCourses: boolean; // Nova prop para indicar se os cursos devem ser mostrados ou não
}

export default function CourseList({ initialCourses, showCourses }: CourseListProps) {
  const [courses, setCourses] = useState<CourseData[]>([]);
  const navigate = useNavigate();

  const handleCardClick = (courseId: string) => {
    navigate(`/course/${courseId}`);
  };

  useEffect(() => {
    if (initialCourses) {
      setCourses(initialCourses);
    }
  }, [initialCourses]);

  return (
    <>
      {showCourses && ( // Renderiza os cursos somente se showCourses for verdadeiro
        <Box display="flex" justifyContent="center" m={10}>
          <Grid container spacing={3} justifyContent="center">
            {courses.map((course) => (
              <Grid item key={course._id} sx={{ display: { xs: 'none', sm: 'block' } }} component="div">
                <Box my={2} style={{ width: '330px', height: '450px' }}>
                  <CardProduct courseData={course} onCardClick={() => handleCardClick(course._id)} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </>
  );
}
