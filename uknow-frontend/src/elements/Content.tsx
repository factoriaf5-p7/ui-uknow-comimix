import { Typography} from '@mui/material';
import CourseData from '../interfaces/course.interface';

function ContentDetail({ oneCourse }: { oneCourse: CourseData }) {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {oneCourse.name}
      </Typography>
      <img src={oneCourse.image} alt={oneCourse.name} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />

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

        <div style={{ flex: 1 }}>
          <Typography>{oneCourse.description}</Typography>
          <Typography>
            <strong>Content:</strong> {oneCourse.content}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default ContentDetail;
