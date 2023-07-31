import { Dialog, DialogContent, DialogTitle, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Typography } from '@mui/material';
import { CourseData } from "../interfaces/course.interface";

interface CourseModalProps {
    open: boolean;
    onClose: () => void;
    course: CourseData;
}
export const CourseModal = ({ open, onClose, course}: CourseModalProps) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("desktop"));

  return (
    <Dialog open={open} onClose={onClose} fullScreen={fullScreen} maxWidth="desktop" fullWidth>
  <DialogTitle>{course.name}</DialogTitle>
  <DialogContent dividers>
    <img src={course.image} alt={course.name} style={{ width: "100%", marginBottom: theme.spacing(2) }} />
    <Typography>{course.description}</Typography>
    <Typography>Price: ${course.price}</Typography>
    <Typography>Difficulty: {course.difficulty}</Typography>
    <Typography>Rating: {course.average}</Typography>
{/*     <Typography>Rating: {course.showDate}</Typography>
 */}    {course.tags.map((tag) => (
      <Typography key={tag}>{tag}</Typography>
    ))}
   {/*  <div style={{ maxHeight: "400px", overflowY: "auto" }}>
      {comments.map((comment) => (
        <Typography key={comment.id}>{comment.text}</Typography>
      ))}
    </div> */}
  </DialogContent>
</Dialog>
  );
};