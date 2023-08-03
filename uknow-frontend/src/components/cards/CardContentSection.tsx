import {
  CardContent,
  Typography,
  useTheme,
  Theme,
} from "@mui/material";
import { styled } from "@mui/system";

import RatingStars from "../elements/RatingStars";
import { CourseData } from "../../interfaces/course.interface";

interface CardContentSectionProps {
  courseData: CourseData;
}


interface CardContentContainerProps {
  theme: Theme;
}

const CardContentContainer = styled(CardContent)<CardContentContainerProps>(({ theme }) => ({
  maxHeight: '195px',
  overflow: 'hidden',
  padding: '20px',
  transition: theme.transitions.create('max-height', {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface CardContentSectionProps {
  
  description: string;
  average: number;
  difficulty: string;
  showDate: string;
  price: number;
  
}

export const CardContentSection = ({
  description,
  average,
  difficulty,
  showDate,
}: CardContentSectionProps) => {
  const theme = useTheme();
  

    const hasDescription = description && description.trim() !== '';
    const shortDescription = hasDescription ? description.substring(0, 70) + ' ...' : 'No description available';

  return (
    <CardContentContainer theme={theme}>
      <Typography variant="body2" color="text.secondary">
        {shortDescription}
      </Typography>
      <Typography variant="body2" color="text.secondary" my={1}>
        <RatingStars average={average} />
      </Typography>
      <Typography variant="body2" color="text.secondary" my={1}>
        Difficulty: {difficulty}
      </Typography>
      <Typography variant="subtitle2" sx={{ fontSize: '0.7rem' }}>{showDate}</Typography>
    </CardContentContainer>
  );
};
