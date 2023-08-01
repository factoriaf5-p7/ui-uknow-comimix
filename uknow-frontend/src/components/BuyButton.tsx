import { Button, useMediaQuery, } from '@mui/material'

import { UknowTheme } from '../themes/ThemeUknow';
import { useState } from 'react';
import PurchaseModal from './PurchaseModal';

interface BuyButtonProps {
  courseId: string;
}

const BuyButton = ({ courseId }: BuyButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobileScreen = useMediaQuery('(max-width: 600px)');

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePurchaseConfirm = () => {
    // Implement the logic here to process the course purchase.
    // You can use the courseId here if needed.
    console.log("Course ID:", courseId);
    console.log("Course purchased successfully!");
    handleCloseModal(); // Close the modal after purchase is confirmed
  };

  return (
    <>
    <Button
      variant="contained"
      color="primary"
      style={{
        backgroundColor: UknowTheme.palette.uOrange.main,
        color: '#fff',
        marginLeft: '0px',
        fontSize: isMobileScreen ? '1em' : '.8rem', 
        padding: isMobileScreen ? '0.4rem 6.5rem' : '0.4rem 2rem', 
      }}
      onClick={handleOpenModal}
    >
      Buy Now
    </Button>
    <PurchaseModal open={isModalOpen} onClose={handleCloseModal} onConfirm={handlePurchaseConfirm} />
  </>
  );
};

export default BuyButton;