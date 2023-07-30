import { Button, Typography } from '@mui/material'

import useOneCourseData from '../hooks/useOneCourseData';
import { useNavigate } from 'react-router-dom';
import { UknowTheme } from '../themes/ThemeUknow';

const BuyButton = () => {
    const navigate = useNavigate();

    const handleBuyClick = () => {
 
      navigate('/under-construction');
    };

  const { isLoading, isError, oneCourse } = useOneCourseData();
  if (isLoading) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  if (isError || !oneCourse) {
    return <Typography variant="h6">Error fetching course data.</Typography>;
  }
  return (
    <Button variant="contained" color="primary" style={{ backgroundColor: UknowTheme.palette.uOrange.main, color: '#fff' }} sx={{ fontSize: '1rem', padding: '0.8rem 3rem' }} onClick={handleBuyClick}>
            Buy Now - ${oneCourse.price}
          </Button>
  )
}

export default BuyButton