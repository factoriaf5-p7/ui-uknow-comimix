
import { Button, } from '@mui/material'

import { UknowTheme } from '../themes/ThemeUknow';

const BuyButton = () => {
  
  
  return (
    <Button 
    variant="contained" color="primary" 
    style={{ backgroundColor: UknowTheme.palette.uOrange.main, color: '#fff', marginLeft:'0px' }}
    sx={{ fontSize: '.8rem', padding: '0.3rem 1rem' }}>
      Buy Now 
    </Button>
  )
}

export default BuyButton