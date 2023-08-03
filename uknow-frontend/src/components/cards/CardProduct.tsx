import { styled, useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Tooltip from '@mui/material/Tooltip';
import { CourseData } from '../../interfaces/course.interface';
import { format } from 'date-fns';
import { CardContentSection } from './CardContentSection';
import { MouseEventHandler, useState } from 'react';
import { CourseModal } from '../modals/CourseModal';
import BuyButton from "../buttons/BuyButton";
import { CardActions, Grid, Typography } from '@mui/material';

const CardActionsContainer = styled(CardActions)({
  cursor: 'default',
  padding: '0px 20px',
});

const BottomGridContainer = styled(Grid)({
  bottom: 0,
  width: '100%',
});

const CartButtonGridItem = styled(Grid)({
  position: 'absolute',
  bottom: '20px', 
  width: '100%', 
});

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


const CardContentSectionContainer = styled('div')({
  position: 'absolute',
  bottom: '60px',
  left: 0,
  width: '100%',
});


export const CardProduct = ({ courseData }: CardProductProps) => {
  const theme = useTheme();
  const create_date = courseData.createdAt ? format(new Date(courseData.createdAt), 'MM/dd/yyyy') : '';
  const update_date = courseData.updatedAt ? format(new Date(courseData.updatedAt), 'MM/dd/yyyy') : '';
  const showDate = courseData.updatedAt ? update_date : create_date;
  
  const [modalOpen, setModalOpen] = useState(false);

  const handleCardClick = () => {
    if (!modalOpen) {
      setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };


  return (
    <>
    <CardContainer sx={{ maxWidth: 320, height: 480, position: 'relative' }}>
      <Tooltip title="Click here" placement="right" followCursor>
        <div onClick={handleCardClick}>
          <Typography
            variant="body2"
            color="text.secondary"
            fontWeight="bold"
            sx={{
              color: theme.palette.uDarkBlue.main,
              position: 'absolute',
              top: 0,
              left: 0,
              padding: '8px 12px',
              margin: '5px',
              background: theme.palette.background.default,
              borderRadius: '10px',
            }}
          >
            knwl: {courseData.price}
          </Typography>
          <CardMedia component="img" height="170" image={courseData.image} alt="image de course" />
          <TitleSubheaderContainer>
            <CardHeader titleTypographyProps={{ variant: 'h6', sx: { fontSize: '1.2rem' } }} title={courseData.name} />
          </TitleSubheaderContainer>
          <CardContentSectionContainer>
            <CardContentSection
              courseData={courseData}
              description={courseData.description}
              average={courseData.average}
              difficulty={courseData.difficulty}
              showDate={showDate}
              price={courseData.price}
            />
          </CardContentSectionContainer>
        </div>
      </Tooltip>
      <CardActionsContainer disableSpacing sx={{ padding: '0px 20px', marginBottom: '30px' }}>
        <BottomGridContainer container justifyContent="space-between" alignItems="center">
          <Grid item>
          </Grid>
          <CartButtonGridItem item>
            <BuyButton course={courseData} />
          </CartButtonGridItem>
        </BottomGridContainer>
      </CardActionsContainer>
    </CardContainer>
    <CourseModal open={modalOpen} onClose={handleCloseModal} course={courseData} />
  </>
  );
};