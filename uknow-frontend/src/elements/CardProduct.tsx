import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Grid } from '@mui/material';

import { CourseData } from '../interfaces/course.interface';
import { format } from 'date-fns';
import RatingStars from '../components/RatingStars';


interface CardProductProps {
  courseData: CourseData;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CardContentContainer = styled(CardContent)(({ theme }) => ({
  maxHeight: '150px',
  overflow: 'hidden',
  marginBottom: '20px',
  transition: theme.transitions.create('max-height', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ExpandedCardContent = styled(CardContent)({
  maxHeight: 'none',
  overflow: 'auto',
});

export const CardProduct = ({ courseData }: CardProductProps) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  const create_date = courseData.createdAt ? format(new Date(courseData.createdAt), 'MM/dd/yyyy') : '';
  const update_date = courseData.updatedAt ? format(new Date(courseData.updatedAt), 'MM/dd/yyyy') : '';
  const showDate = courseData.updatedAt ? update_date : create_date;
  
  const hasDescription = courseData.description && courseData.description.trim() !== '';
  const shortDescription = hasDescription
  ? courseData.description.substring(0, 100) + '...'
  : 'No description available';

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
  });

  return (
    
    <Card sx={{ maxWidth: 345, maxheight: 450, position: 'relative' }}>
      
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
        


      <CardContentContainer sx={{ maxHeight: expanded ? 'none' : '150px' }}>
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
        <BottomGridContainer container justifyContent="space-between" alignItems="center">
          <Grid item>
            <IconButton aria-label="Buy">
              <AddShoppingCartIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="text.secondary">
              Price: ${courseData.price}
            </Typography>
          </Grid>
          <Grid item>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </Grid>
        </BottomGridContainer>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <ExpandedCardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>
            {courseData.description}
          </Typography>
        </ExpandedCardContent>
      </Collapse>
    </Card>
  );
};
