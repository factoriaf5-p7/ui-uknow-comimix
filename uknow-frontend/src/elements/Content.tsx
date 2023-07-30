
import { Typography, Button, Box, useTheme } from '@mui/material';
import useOneCourseData from '../hooks/useOneCourseData';

const Content = () => {
  const theme = useTheme();
  const { isLoading, isError, oneCourse } = useOneCourseData();
  const token = localStorage.getItem('token'); // Suponiendo que has almacenado el token en el localStorage.

  if (isLoading) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  if (isError || !oneCourse) {
    return <Typography variant="h6">Error fetching course data.</Typography>;
  }

  const { name, price, topic, difficulty, description, average, content, image } = oneCourse;

  return (
    <Box mt={3} display="flex" flexDirection={{ xs: 'column', md: 'row' }} justifyContent="space-between">
      <Box
        flex="1"
        mr={{ xs: 0, md: 2 }}
        mb={{ xs: 2, md: 0 }}
        sx={{
          maxWidth: '600px',
          width: '100%',
          borderRadius: '15px',
          overflow: 'hidden',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <img src={image} alt="image de course" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '15px 15px 0 0' }} />
        <Box p={3} sx={{ backgroundColor: theme.palette.uLightBlue.main }}>
          <Typography variant="h4" sx={{ fontSize: '1.5rem', fontWeight: 700 }}>
            {name}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: '1.1rem', fontWeight: 500, color: theme.palette.text.secondary, mt: 1 }}>
            {topic}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1rem', mt: 2 }}>
            {description}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1rem', mt: 2 }}>
            Difficulty: {difficulty}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1rem', mt: 1 }}>
            Average: {average}
          </Typography>
        </Box>
      </Box>

      <Box flex="1" ml={{ xs: 0, md: 2 }}>
        {token && content && (
          <Box mb={3}>
            <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 700 }}>
              Course Content:
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1rem', mt: 1 }}>
              {content}
            </Typography>
          </Box>
        )}

        <Box display="flex" justifyContent="center">
          <Button variant="contained" color="primary" sx={{ fontSize: '1rem', padding: '0.8rem 3rem' }}>
            Buy Now - ${price}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Content;
