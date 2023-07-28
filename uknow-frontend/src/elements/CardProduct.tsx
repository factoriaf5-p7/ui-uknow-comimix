
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Grid } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';


import { CourseData } from '../interfaces/course.interface';
import { format } from 'date-fns';
import RatingStars from '../components/RatingStars';


interface CardProductProps {
  courseData: CourseData;
}

const TitleSubheaderContainer = styled('div')({
  height: '105px', 
  overflow: 'hidden',
});

const BottomGridContainer = styled(Grid)({
  position: 'absolute',
  bottom: 0,
  width: '100%',
  paddingBottom: '5px',
  paddingTop: '5px',
  paddingRight: '30px',
});

const CardContainer = styled(Card)({
  position: 'relative',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
  '&:hover': {
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
    '& $CourseDetailText': {
      opacity: 1,
    },
  },
});

const CardContentContainer = styled(CardContent)(({ theme }) => ({
  maxHeight: '150px',
  overflow: 'hidden',
  marginBottom: '20px',
  padding: '20px',
  transition: theme.transitions.create('max-height', {
    duration: theme.transitions.duration.shortest,
  }),
}));

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


export const CardProduct = ({ courseData }: CardProductProps) => {

  const create_date = courseData.createdAt ? format(new Date(courseData.createdAt), 'MM/dd/yyyy') : '';
  const update_date = courseData.updatedAt ? format(new Date(courseData.updatedAt), 'MM/dd/yyyy') : '';
  const showDate = courseData.updatedAt ? update_date : create_date;
  
  const hasDescription = courseData.description && courseData.description.trim() !== '';
  const shortDescription = hasDescription
  ? courseData.description.substring(0, 100) + ' ...'
  : 'No description available';


  return (
    <Tooltip title="Click to see more"  placement="right" followCursor>
      <CardContainer sx={{ maxWidth: 345, height: 450, position: 'relative' }}>
       
          <CardMedia
            component="img"
            height="185"
            image={courseData.image}
            alt="image de course"
          />
          
          <TitleSubheaderContainer>
            <CardHeader
              titleTypographyProps={{ variant: 'h6', sx: { fontSize: '1.2rem' } }}
              title={courseData.name}
            />
          </TitleSubheaderContainer>
            


          <CardContentContainer>
            <Typography variant="body2" color="text.secondary">
              {shortDescription}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <RatingStars average={courseData.average} />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Difficulty: {courseData.difficulty}
            </Typography>
            <Typography variant="subtitle2" sx={{ fontSize: '0.7rem' }}> {showDate}</Typography>
          </CardContentContainer>  

          <CardActions disableSpacing>
            <BottomGridContainer container justifyContent="space-between" alignItems="center" >
              <Grid item>
                <CartButton aria-label="Buy">
                  <AddShoppingCartIcon />
                </CartButton>
              </Grid>
              <Grid item>
                <Typography variant="body2" color="text.secondary">
                  Price: ${courseData.price}
                </Typography>
              </Grid>
          
            </BottomGridContainer>
          </CardActions>

      </CardContainer>
    </Tooltip>
  );
};
