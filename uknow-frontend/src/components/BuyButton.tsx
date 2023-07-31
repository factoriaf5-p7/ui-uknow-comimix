import { Button, } from '@mui/material'

import { UknowTheme } from '../themes/ThemeUknow';

const BuyButton = () => {
  
  return (
    <Button variant="contained" color="primary" style={{ backgroundColor: UknowTheme.palette.uOrange.main, color: '#fff' }} sx={{ fontSize: '1rem', padding: '0.8rem 3rem' }}>
            Buy Now 
          </Button>
  )
}

export default BuyButton