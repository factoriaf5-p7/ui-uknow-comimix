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

import { CourseData } from '../interfaces/course.interface';
import { format } from 'date-fns';

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

export const CardProduct = ({ courseData }: CardProductProps) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const create_date = courseData.createdAt ? format(new Date(courseData.createdAt), 'MM/dd/yyyy') : '';
  const update_date = courseData.updatedAt ? format(new Date(courseData.updatedAt), 'MM/dd/yyyy') : '';
  
  const hasDescription = courseData.description && courseData.description.trim() !== '';
  const shortDescription = hasDescription
  ? courseData.description.substring(0, 100)
  : 'No description available';

  return (
    <Card sx={{ maxWidth: 345, height: '100%' }}>
      <CardHeader
        title={courseData.name}
        subheader={(
          <>
            <div>Created: {create_date}</div>
            <div>Updated: {update_date}</div>
          </>
        )}
        
      />
      <CardMedia
        component="img"
        height="194"
        image={courseData.image}
        alt="image de course"
      />
      <CardContent sx={{ maxHeight: 150, overflow: 'auto' }}>
        <Typography variant="body2" color="text.secondary">
        {shortDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Buy">
          <AddShoppingCartIcon />
        </IconButton>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>
            {courseData.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
