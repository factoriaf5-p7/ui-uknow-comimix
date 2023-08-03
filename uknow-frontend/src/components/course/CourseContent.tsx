import { Box, Typography } from '@mui/material';
import { UknowTheme } from '../../themes/ThemeUknow';
import { CourseData } from '../../interfaces/course.interface';

interface CourseContentProps {
  course: CourseData;
}

function CourseContent({ course }: CourseContentProps) {
  return (
    <Box my={4} sx={{
      margin : '2em'
    }}>
      <Typography variant="h5" gutterBottom style={{ color: UknowTheme.palette.uBlue.main }}>
        Contenido del curso
      </Typography>
      <Typography variant="body1" style={{ color: UknowTheme.palette.uDarkBlue.main }}>
        {course.content}
      </Typography>
    </Box>
  );
}

export default CourseContent;
