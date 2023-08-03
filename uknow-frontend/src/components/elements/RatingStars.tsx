
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { uColors } from '../../themes/ThemeUknow';

interface RatingStarsProps {
  average: number;
}

const RatingStars = ({ average }: RatingStarsProps) => {
  const MAX_STARS = 5;
  const fullStars = Math.floor(average);
  const hasHalfStar = average - fullStars >= 0.5;

  const stars = Array.from({ length: MAX_STARS }, (_, index) => {
    if (index < fullStars) {
      return <StarIcon key={index} style={{ color: uColors.uOrange }}/>;
    } else if (index === fullStars && hasHalfStar ) {
      return (
        <span key={index} style={{ display: 'inline-flex', alignItems: 'center' }}>
          <StarIcon style={{ clipPath: 'inset(0 50% 0 0)', margin: 0, color: uColors.uOrange }} />
          <StarOutlineIcon
            style={{ clipPath: 'inset(0 0 0 50%)', marginLeft: '-1.5rem', color: uColors.uOrange }} />
        </span>
      );
    } else {
      return <StarOutlineIcon key={index} style={{ color: uColors.uOrange }} />;
    }
  });

  return <>{stars}</>;
};

export default RatingStars;
