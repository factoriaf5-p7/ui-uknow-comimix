import { Button } from '@mui/material';
import { UknowTheme } from '../themes/ThemeUknow';
import { useState } from 'react';
import PurchaseModal from './PurchaseModal';

interface BuyButtonProps {
  courseId: string;
}

const BuyButton = ({ courseId }: BuyButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        style={{ backgroundColor: UknowTheme.palette.uOrange.main, color: '#fff', marginLeft: '10px' }}
        sx={{ fontSize: '.8rem', padding: '0.3rem 1rem' }}
        onClick={handleOpenModal} // Use handleOpenModal directly as the onClick handler
      >
        Buy Now
      </Button>
      <PurchaseModal open={isModalOpen} onClose={handleCloseModal} onConfirm={handlePurchaseConfirm} />
    </>
  );
};

export default BuyButton;
