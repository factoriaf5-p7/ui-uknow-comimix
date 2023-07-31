
import { Button } from '@mui/material';
import { UknowTheme } from '../themes/ThemeUknow';

interface BuyButtonProps {
  onClick: () => void; 
}

const BuyButton = ({ onClick }: BuyButtonProps) => {
  return (
    
    <Button
      variant="contained"
      color="primary"
      style={{ backgroundColor: UknowTheme.palette.uOrange.main, color: '#fff', marginLeft: '10px' }}
      sx={{ fontSize: '.8rem', padding: '0.3rem 1rem' }}
      
      onClick={onClick} 
    >
      Buy Now
    </Button>
    
  );
};

export default BuyButton;
