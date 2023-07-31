import {
  CardContent,
  Typography,
  CardActions,
  Grid,
  useTheme,
  Theme,
} from "@mui/material";
import { styled } from "@mui/system";
import { CartBuyButton } from "./CartBuyButton";
import RatingStars from "./RatingStars";


const BottomGridContainer = styled(Grid)({
  bottom: 0,
  width: "100%",
  paddingBottom: "10px",
  paddingTop: "5px",
  paddingLeft: "-20px",
});

const CartButtonGridItem = styled(Grid)({
  marginLeft: "-20px",
});

interface CardContentContainerProps {
  theme: Theme;
}

const CardContentContainer = styled(CardContent)<CardContentContainerProps>(
  ({ theme }) => ({
    maxHeight: "150px",
    overflow: "hidden",
    marginBottom: "20px",
    padding: "20px",
    transition: theme.transitions.create("max-height", {
      duration: theme.transitions.duration.shortest,
    }),
  })
);

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
  price,
}: CardContentSectionProps) => {
  const theme = useTheme(); // Obter o objeto theme usando o hook useTheme


  const hasDescription = description && description.trim() !== "";
  const shortDescription = hasDescription
    ? description.substring(0, 100) + " ..."
    : "No description available";

  return (
    
      <CardContentContainer theme={theme}>
        <Typography variant="body2" color="text.secondary">
          {shortDescription}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <RatingStars average={average} />
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Difficulty: {difficulty}
        </Typography>
        <Typography variant="subtitle2" sx={{ fontSize: "0.7rem" }}>
          {showDate}
        </Typography>
        <CardActions disableSpacing>
          <BottomGridContainer
            container
            justifyContent="space-between"
            alignItems="center"
          >
            <CartButtonGridItem item>
              <CartBuyButton />
            </CartButtonGridItem>
            <Grid item>
              <Typography variant="body2" color="text.secondary">
                Price: ${price}
              </Typography>
            </Grid>
          </BottomGridContainer>
        </CardActions>
      </CardContentContainer>
 
  );
};
