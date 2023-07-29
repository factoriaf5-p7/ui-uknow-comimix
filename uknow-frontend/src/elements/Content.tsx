import { Typography, Button, Grid } from '@mui/material';
import { CourseData } from '../interfaces/course.interface';
import RatingStars from './RatingStars'; // Assuming you have a component for rendering star ratings.

function ContentDetail({ oneCourse }: { oneCourse: CourseData }) {
  const accessToken = localStorage.getItem('token');
  const isCoursePurchased = oneCourse.isPurchased; // Assuming you have a property indicating if the course is purchased.

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom>
        {oneCourse.name}
      </Typography>
      <img
        src={oneCourse.image}
        alt={oneCourse.name}
        style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
      />

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <div style={{ flex: 1 }}>
          <Typography>
            <strong>Price:</strong> ${oneCourse.price}
          </Typography>
          <Typography>
            <strong>Topic:</strong> {oneCourse.topic}
          </Typography>
          <Typography>
            <strong>Difficulty:</strong> {oneCourse.difficulty}
          </Typography>
          <Typography>
            <strong>Average Rating:</strong> {oneCourse.average}
          </Typography>
          <Typography>
            <strong>Tags:</strong> {oneCourse.tags.join(', ')}
          </Typography>
        </div>

        {accessToken && isCoursePurchased ? (
          <Grid item style={{ flex: 1 }}>
            <Typography>{oneCourse.description}</Typography>
            <Typography>
              <strong>Content:</strong> {oneCourse.content}
            </Typography>
            <Button variant="contained" color="primary">
              Buy Now
            </Button>
          </Grid>
        ) : null}
      </div>
    </div>
  );
}

export default ContentDetail;
