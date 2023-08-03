
import { Box,  Typography, Grid, Paper } from "@mui/material";

import { CourseData } from "../../interfaces/course.interface";

interface CourseListProps {
  oneCourse: CourseData ;
}
const Content = ({ oneCourse }: CourseListProps) => {

 

  return (
    <Box p={4}>
      <Typography variant="h4">{oneCourse.name}</Typography>
      <Typography variant="body1">{oneCourse.description}</Typography>

      <Grid container spacing={2} mt={4}>
        <Grid >
          <Paper>
            <Box p={2}>
              <Typography variant="h6">Price: ${oneCourse.price}</Typography>
              <Typography variant="h6">Topic: {oneCourse.topic}</Typography>
              <Typography variant="h6">Difficulty: {oneCourse.difficulty}</Typography>
              <Typography variant="h6">Tags: {oneCourse.tags.join(", ")}</Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid >
          <Paper>
            <Box p={2}>
              <Typography variant="h6">Content:</Typography>
              <Typography variant="body2">{oneCourse.content}</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Content