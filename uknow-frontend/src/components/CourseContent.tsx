import { Box, Typography } from '@mui/material';
import { UknowTheme } from '../themes/ThemeUknow';

interface CourseContentProps {
  content: string;
}

function CourseContent({ content }: CourseContentProps) {
  return (
    <Box my={4}>
      <Typography variant="h5" gutterBottom style={{ color: UknowTheme.palette.uBlue.main }}>
        Contenido del curso
      </Typography>
      <Typography variant="body1" style={{ color: UknowTheme.palette.uDarkBlue.main }}>
        {content}
      </Typography>
    </Box>
  );
}

export default CourseContent;
