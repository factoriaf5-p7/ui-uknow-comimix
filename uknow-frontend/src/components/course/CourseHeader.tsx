
import { Box, Typography } from '@mui/material';
import { UknowTheme } from '../../themes/ThemeUknow';
import { CourseData } from '../../interfaces/course.interface';

interface CourseHeaderProps {
  course: CourseData;
}

const CourseHeader = ({ course }: CourseHeaderProps) => {


  return (
    <Box my={4} sx={{
      margin : '2em'
    }}>
      <Typography variant="h3" gutterBottom style={{ color: UknowTheme.palette.uBlue.main , padding : '5% 0 0 0'}}>
        {course.name}
      </Typography>
      <Typography variant="body1" style={{ color: UknowTheme.palette.uDarkBlue.main }}>
        {course.description}
      </Typography>
    </Box>
  );
};

export default CourseHeader;