import { Button } from '@mui/material'
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { UknowTheme } from '../themes/ThemeUknow';
import { useContext, useState } from 'react';
import PurchaseModal from './PurchaseModal';
import { AuthContext } from '../context/AuthContex';



interface BuyButtonProps {
  courseId: string;
}

interface PurchaseResponse {
  message: string;
}

const purchaseCourse = async (courseId: string): Promise<PurchaseResponse> => {
  const response = await fetch(`http://localhost:3000/courses/purchase`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ courseId }),
  });

  if (!response.ok) {
    throw new Error('Failed to purchase course');
  }

  const data = await response.json();
  return data;
};


const BuyButton = ({ courseId }: BuyButtonProps) => {
  const { isLoggedIn } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const purchaseMutation = useMutation(purchaseCourse);

  const navigate = useNavigate();

  
const handleOpenModal = () => {
    if (isLoggedIn) {
      setIsModalOpen(true);
    } else {
      navigate("/login");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePurchaseConfirm = async () => {
    try {
      const response = await purchaseMutation.mutateAsync(courseId);
      console.log(response.message); 
      handleCloseModal();
    } catch (error) {
      console.error(error);
      
    }
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
          fontSize: '1em',
          padding: '0.4rem 6.5rem',
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