import {
  CardContent,
  Typography,
  CardActions,
  Grid,
  useTheme,
  Theme,
} from "@mui/material";
import { styled } from "@mui/system";
import BuyButton from "./BuyButton";
import RatingStars from "./RatingStars";
import PurchaseModal from "./PurchaseModal";
import { useState } from "react";

const BottomGridContainer = styled(Grid)({
  bottom: 0,
  width: '100%',
  paddingBottom: '10px',
  paddingTop: '5px',
  paddingLeft: '-30px',
});

const CartButtonGridItem = styled(Grid)({
  marginLeft: "-20px",
});

interface CardContentContainerProps {
  theme: Theme;
}

const CardContentContainer = styled(CardContent)<CardContentContainerProps>(({ theme }) => ({
  maxHeight: '195px',
  overflow: 'hidden',
  marginBottom: '20px',
  padding: '20px',
  transition: theme.transitions.create('max-height', {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface CardContentSectionProps {
  description: string;
  average: number;
  difficulty: string;
  showDate: string;
  price: number;
  
}

export const CardContentSection = ({
  description,
  average,
  difficulty,
  showDate,
  price,
}: CardContentSectionProps) => {
  const theme = useTheme(); 
  const [isModalOpen, setIsModalOpen] = useState(false);

    const hasDescription = description && description.trim() !== '';
    const shortDescription = hasDescription ? description.substring(0, 70) + ' ...' : 'No description available';

    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  

    
    const handlePurchaseConfirm = () => {
      // Implement the logic here to process the course purchase.
      // For example, send a request to the server or perform some specific action.
      console.log("Course purchased successfully!");
      handleCloseModal(); // Close the modal after purchase is confirmed
    };

  return (
    
      
      <CardContentContainer theme={theme}>
        <Typography variant="body2" color="text.secondary">
          {shortDescription}
        </Typography>
        <Typography variant="body2" color="text.secondary" my={1}>
        <RatingStars average={average} />
        </Typography>
        <Typography variant="body2" color="text.secondary" my={1}>
        Difficulty: {difficulty}
        </Typography>
        <Typography variant="subtitle2" sx={{ fontSize: '0.7rem' }}>{showDate}</Typography>
        <CardActions disableSpacing sx={{ padding: 0 }}>
        <BottomGridContainer container justifyContent="space-between" alignItems="center">
            
            <Grid item>
            <Typography variant="body2" color="text.secondary" fontWeight="bold" sx={{ color: theme.palette.uDarkBlue.main }}>
                knwl: ${price}
            </Typography>
            </Grid>
            <CartButtonGridItem item>
                <BuyButton onClick={handleOpenModal}/>
            </CartButtonGridItem>
        </BottomGridContainer>
        </CardActions>
        <PurchaseModal open={isModalOpen} onClose={handleCloseModal} onConfirm={handlePurchaseConfirm} />
      </CardContentContainer>
 
  );
};
