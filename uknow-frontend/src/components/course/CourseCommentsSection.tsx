
import { Comment } from '../../interfaces/comment.interface';
import { useCourseComments } from '../../services/useQuery-CourseComments';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/system';

interface CommentsSectionProps {
  courseId: string;
}

const CourseCommentsSection = ({ courseId }: CommentsSectionProps) => {
  const { isLoading, isError, comments } = useCourseComments(courseId);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <p>Error al cargar los comentarios.</p>;
  }

  return (
    <>
    <Box my={4} sx={{
      margin : '2em'
    }}>
      <Typography variant="h5" gutterBottom>
        Comentarios
      </Typography>
      {comments && comments.length > 0 ? (
        <Paper elevation={3} style={{ padding: '16px', marginBottom: '20px' }}>
          <List>
            {comments.map((comment: Comment) => (
              <ListItem key={comment._id}>
                <ListItemText primary={comment.text} />
              </ListItem>
            ))}
          </List>
        </Paper>
      ) : (
        <Typography variant="body1" color="textSecondary" align="center">
          No hay comentarios aún.
        </Typography>
      )}
      </Box>
    </>
  );
};

export default CourseCommentsSection;

