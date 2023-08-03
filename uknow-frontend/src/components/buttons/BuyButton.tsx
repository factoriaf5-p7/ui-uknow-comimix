import { Button } from '@mui/material'; 
import { useNavigate } from 'react-router-dom';
import { UknowTheme } from '../../themes/ThemeUknow';
import { useContext, useState } from 'react';
import PurchaseModal from '../modals/PurchaseModal';
import { AuthContext } from '../../context/AuthContext';
import { usePurchaseCourseMutation } from '../../services/useMutation-Purchase';
import { CourseData } from '../../interfaces/course.interface';
import { Navigate } from 'react-router-dom';

interface BuyButtonProps {
  course: CourseData;
}

const BuyButton = ({ course }: BuyButtonProps) => {
  const { isLoggedIn, user, } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const navigate = useNavigate();

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

  const navigate = useNavigate();

  const handlePurchaseConfirm = async () => {
    try {
      if (!user) {
        console.log('User not authenticated. Please log in to make a purchase.');
        return;
      }

      const response = await purchaseMutation.mutateAsync({ courseId: course._id, userId: user._id });
      console.log(response.message);

      user.bought_courses.push({ course_id: course._id, stars: 0, commented: false });
      localStorage.setItem('user', JSON.stringify(user));
      console.log('buy', course);

      navigate('/course', { 
        state: course
      });
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
