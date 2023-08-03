import { Button } from '@mui/material'; 
import { useNavigate } from 'react-router-dom';

import { UknowTheme } from '../../themes/ThemeUknow';
import { useContext, useState } from 'react';
import PurchaseModal from '../modals/PurchaseModal';
import { AuthContext } from '../../context/AuthContext';
import { usePurchaseCourseMutation } from '../../services/useMutation-Purchase';

interface BuyButtonProps {
  courseId: string;
}


const BuyButton = ({ courseId }: BuyButtonProps) => {
  const { isLoggedIn, user } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const purchaseMutation = usePurchaseCourseMutation(); 

  const handleOpenModal = () => {
    if (isLoggedIn) {
      setIsModalOpen(true);
    } else {
      navigate('/login');
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePurchaseConfirm = async () => {
    try {
      if (!user) {
        console.log('User not authenticated. Please log in to make a purchase.');
        return;
      }

      const response = await purchaseMutation.mutateAsync({ courseId, userId: user._id });
      console.log(response.message);
      localStorage.setItem('courseData', JSON.stringify(response));
      
      navigate(`/course`);
      

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
