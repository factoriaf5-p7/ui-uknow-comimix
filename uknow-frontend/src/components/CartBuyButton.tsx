import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { styled } from '@mui/material/styles';

const CartButton = styled(IconButton)(({ theme }) => ({
  transition: theme.transitions.create(['transform', 'background-color', 'color'], {
    duration: theme.transitions.duration.shortest,
  }),
  '&:hover': {
    transform: 'scale(1.1)',
    backgroundColor: '#f8f8f8',
    color: theme.palette.primary.main,
  },
}));

export const CartBuyButton = () => {
  return (
    <CartButton aria-label="Buy">
      <AddShoppingCartIcon />
    </CartButton>
  );
};
