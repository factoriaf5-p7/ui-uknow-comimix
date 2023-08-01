import {
  Dialog,
  DialogContent,
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
  const isMobile = useMediaQuery(theme.breakpoints.down("desktop"));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      sx={{
        overflowX: "hidden", // Hide horizontal scrollbar
        display: "flex",
        flexDirection: isMobile ? "column" : "row", // Set the flexDirection to "column" for mobile
        justifyContent: "center", // Center the Dialog vertically
        alignItems: "center", // Center the Dialog horizontally
      }}
    >
      <div>
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          sx={{
            position: "absolute",
            top: theme.spacing(1),
            right: 20,
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" sx={{ padding: theme.spacing(2) }}>
          {course.name}{" "}
        </Typography>
      </div>
      <DialogContent dividers>
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "center" : "flex-start", // Center the image on mobile, align top on desktop
            gap: theme.spacing(2), // Add spacing between elements
          }}
        >
          <div style={{ flex: "0 0 30%" }}>
            <img
              src={course.image}
              alt={course.name}
              style={{
                width: isMobile ? "100%" : "auto", // Set the width to 100% on mobile and auto on desktop
                maxWidth: isMobile ? "400px" : "100%", // Set the maximum width on mobile and 100% on desktop
                marginBottom: isMobile ? theme.spacing(2) : 0,
              }}
            />
          </div>
          <div style={{ flex: "1" }}>
            <Typography
              style={{
                marginBottom: theme.spacing(1),
                textAlign: "justify",
              }}
            >
              {course.description}
            </Typography>
            <Typography
              style={{
                marginBottom: theme.spacing(1),
                textAlign: "justify",
              }}
            >
              Price: ${course.price}
            </Typography>
            <Typography
              style={{
                marginBottom: theme.spacing(1),
                textAlign: "justify",
              }}
            >
              Difficulty: {course.difficulty}
            </Typography>
            <Typography
              style={{
                marginBottom: theme.spacing(1),
                textAlign: "justify",
              }}
            >
              Rating: {course.average}
            </Typography>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {course.tags.map((tag) => (
                <Typography key={tag} style={{ marginRight: theme.spacing(1) }}>
                  {tag}
                </Typography>
              ))}{" "}
            </div>
          </div>
        </div>
        {/* Scrollable comments */}
        {/*  <div style={{ maxHeight: "400px", overflowY: "auto" }}>
          {comments.map((comment) => (
            <Typography key={comment.id}>{comment.text}</Typography>
          ))}
        </div> */}{" "}
      </DialogContent>
      <BuyButton courseId={course._id}/>
    </Dialog>
  );
};
