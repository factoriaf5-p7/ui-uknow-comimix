import {
  Dialog,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { CourseData } from "../interfaces/course.interface";
import BuyButton from "./BuyButton";
import { Close as CloseIcon } from "@mui/icons-material";

interface CourseModalProps {
  open: boolean;
  onClose: () => void;
  course: CourseData;
}

export const CourseModal = ({ open, onClose, course }: CourseModalProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("mobile"));
 return (
  <Dialog
  open={open}
  onClose={onClose}
  fullScreen={isMobile}
  sx={{
    overflowX: "hidden", // Hide horizontal scrollbar
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // Center the Dialog vertically
    alignItems: "center", // Center the Dialog horizontally
  }}
  maxWidth="desktop" // Set the maximum width for the Dialog
>
  <DialogTitle>
    <IconButton
      edge="end"
      color="inherit"
      onClick={onClose}
      aria-label="close"
      sx={{ position: "absolute", top: theme.spacing(1), right: theme.spacing(1) }}
    >
      <CloseIcon />
    </IconButton>
    {course.name}
  </DialogTitle>
   <DialogContent dividers>
          {isMobile ? (
            <>
              <img
                src={course.image}
                alt={course.name}
                style={{ width: "100%", marginBottom: theme.spacing(2) }}
              />
              <Typography style={{ marginBottom: theme.spacing(1) }}>{course.description}</Typography>
              <Typography style={{ marginBottom: theme.spacing(1) }}>Price: ${course.price}</Typography>
              <Typography style={{ marginBottom: theme.spacing(1) }}>Difficulty: {course.difficulty}</Typography>
              <Typography style={{ marginBottom: theme.spacing(1) }}>Rating: {course.average}</Typography>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {course.tags.map((tag) => (
                  <Typography key={tag} style={{ marginRight: theme.spacing(1) }}>{tag}</Typography>
                ))}
              </div>
            </>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: theme.spacing(2),
              }}
            >
              <div style={{ flex: "0 0 50%" }}>
                <img
                  src={course.image}
                  alt={course.name}
                  style={{ width: "100%", marginBottom: theme.spacing(2) }}
                />
              </div>
              <div style={{ flex: "1" }}>
                <Typography style={{ marginBottom: theme.spacing(1) }}>{course.description}</Typography>
                <Typography style={{ marginBottom: theme.spacing(1) }}>Price: ${course.price}</Typography>
                <Typography style={{ marginBottom: theme.spacing(1) }}>Difficulty: {course.difficulty}</Typography>
                <Typography style={{ marginBottom: theme.spacing(1) }}>Rating: {course.average}</Typography>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {course.tags.map((tag) => (
                    <Typography key={tag} style={{ marginRight: theme.spacing(1) }}>{tag}</Typography>
                  ))}
                </div>
              </div>
            </div>
          )}
          {/* Scrollable comments */}
          {/*  <div style={{ maxHeight: "400px", overflowY: "auto" }}>
          {comments.map((comment) => (
            <Typography key={comment.id}>{comment.text}</Typography>
          ))}
        </div> */}
        </DialogContent>
        <BuyButton />
      </Dialog>
  );
};