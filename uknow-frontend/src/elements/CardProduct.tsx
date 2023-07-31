import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Tooltip from '@mui/material/Tooltip';

import { CourseData } from '../interfaces/course.interface';
import { format } from 'date-fns';
import { CardContentSection } from '../components/CardContentSection';
import { MouseEventHandler, useState } from 'react';
import { CourseModal } from '../components/CourseModal';



interface CardProductProps {
  courseData: CourseData;
  onCardClick: MouseEventHandler<HTMLDivElement>; 
}

const TitleSubheaderContainer = styled('div')({
  height: '70px',
  overflow: 'hidden',
});

const CardContainer = styled(Card)({
  position: 'relative',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
  borderRadius: '15px',
  '&:hover': {
    boxShadow: '0px 8px 16px rgba(18, 72, 115, 0.8)',
    '& $CourseDetailText': {
      opacity: 1,
    },
  },
});

export const CardProduct = ({ courseData }: CardProductProps) => {
/*   const navigate = useNavigate();

  const handleCardClick: MouseEventHandler<HTMLDivElement> = () => {
    // pagina de detalle
    navigate('/under-construction');
  }; */

  const create_date = courseData.createdAt ? format(new Date(courseData.createdAt), 'MM/dd/yyyy') : '';
  const update_date = courseData.updatedAt ? format(new Date(courseData.updatedAt), 'MM/dd/yyyy') : '';
  const showDate = courseData.updatedAt ? update_date : create_date;
  
  const [modalOpen, setModalOpen] = useState(false);

  const handleCardClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };



  return (
    <>
      
      <CardContainer
        sx={{ maxWidth: 320, height: 460, position: 'relative' }}
      >
        <Tooltip title="Click to see more" placement="right" followCursor>
          <div onClick={handleCardClick}>
            <CardMedia
              component="img"
              height="170"
              image={courseData.image}
              alt="image de course"
            />
            <TitleSubheaderContainer>
              <CardHeader
                titleTypographyProps={{ variant: 'h6', sx: { fontSize: '1.2rem' } }}
                title={courseData.name}
              />
            </TitleSubheaderContainer>
            </div>
          </Tooltip>
        <CardContentSection
          description={courseData.description}
          average={courseData.average}
          difficulty={courseData.difficulty}
          showDate={showDate}
          price={courseData.price}
        />
      </CardContainer>
      
      <CourseModal open={modalOpen} onClose={handleCloseModal} course={courseData} />
    </>
  );
};
