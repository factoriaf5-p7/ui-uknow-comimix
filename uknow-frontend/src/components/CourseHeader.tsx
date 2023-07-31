
import { Box, Typography } from '@mui/material';
import { UknowTheme } from '../themes/ThemeUknow';

interface CourseHeaderProps {
  name: string;
  description?: string;
}

const CourseHeader = ({ name, description }: CourseHeaderProps) => {
  const descriptionMessage = description ? description : 'Description not available';

  return (
    <Box my={4}>
      <Typography variant="h3" gutterBottom style={{ color: UknowTheme.palette.uBlue.main }}>
        {name}
      </Typography>
      <Typography variant="body1" style={{ color: UknowTheme.palette.uDarkBlue.main }}>
        {descriptionMessage}
      </Typography>
    </Box>
  );
};

export default CourseHeader;