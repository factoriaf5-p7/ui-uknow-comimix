import {
  Dialog,
  DialogContent,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { CourseData } from "../../interfaces/course.interface";
import BuyButton from "../buttons/BuyButton";
import { Close as CloseIcon } from "@mui/icons-material";
import { useCourseComments } from "../../services/useQuery-CourseComments";
import RatingStars from "../elements/RatingStars";

interface CourseModalProps {
  open: boolean;
  onClose: () => void;
  course: CourseData;
}

export const CourseModal = ({ open, onClose, course }: CourseModalProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("desktop"));
  const { isLoading, isError, comments } = useCourseComments(course._id);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      sx={{
        overflowX: "hidden", 
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "center", 
        alignItems: "center", 
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
            alignItems: isMobile ? "center" : "flex-start", 
            gap: theme.spacing(2), 
          }}
        >
          <div style={{ flex: "0 0 30%" }}>
            <img
              src={course.image}
              alt={course.name}
              style={{
                width: isMobile ? "100%" : "auto", 
                maxWidth: isMobile ? "400px" : "100%", 
                marginBottom: isMobile ? theme.spacing(2) : 0,
              }}
            />
          </div>
          <div style={{ flex: "1" }}>
          <Typography
    variant="body1"
    style={{
      marginBottom: theme.spacing(1),
      textAlign: "justify",
      fontWeight: "bold", 
    }}
  >
    Description: <span style={{ fontWeight: "normal" }}>{course.description}</span>
  </Typography>
  <Typography
    variant="body1"
    style={{
      marginBottom: theme.spacing(1),
      textAlign: "justify",
      fontWeight: "bold", 
    }}
  >
    Price: <span style={{ fontWeight: "normal" }}>${course.price}</span>
  </Typography>
  <Typography
    variant="body1"
    style={{
      marginBottom: theme.spacing(1),
      textAlign: "justify",
      fontWeight: "bold", 
    }}
  >
    Difficulty: <span style={{ fontWeight: "normal" }}>{course.difficulty}</span>
  </Typography>
  <Typography
    variant="body1"
    style={{
      marginBottom: theme.spacing(1),
      textAlign: "justify",
      fontWeight: "bold", 
    }}
  >
    Rating: <span style={{verticalAlign: "middle" }}><RatingStars average={course.average}/></span>
  </Typography>
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
    }}
  >
    {course.tags.map((tag) => (
      <Typography
        key={tag}
        style={{
          marginRight: theme.spacing(1),
         /*  fontWeight: "bold",  */
        }}
      >
        {tag}
      </Typography>
              ))}{" "}
            </div>
          </div>
        </div>
        {isLoading ? (
          <div>Loading comments...</div>
        ) : isError ? (
          <div>Error loading comments</div>
        ) : (
          <div>
          <h3 style={{ marginBottom: "5px" }}>Comments:</h3>
          <div style={{ maxHeight: "100px", overflowY: "auto" }}>
            {comments?.map((comment) => (
              <div key={comment._id}>
                <p>{comment.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      </DialogContent>
      <BuyButton courseId={course._id} />
    </Dialog>
  );
};
