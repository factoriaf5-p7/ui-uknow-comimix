import { CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { CourseData } from "../../interfaces/course.interface";
import { UknowTheme } from "../../themes/ThemeUknow";
import RatingStars from "../elements/RatingStars";



interface CourseDetailsProps {
    course: CourseData;
  }
  
  const defaultImageUrl = 'https://www.tollelege.es/wp-content/uploads/2021/09/Algoritmo-de-bosque-aleatorio-en-el-aprendizaje-automatico-sitio-del.jpg'; // URL de la imagen predeterminada
  
  const CourseDetails = ({ course }: CourseDetailsProps) => {
    const { image, topic, difficulty, average } = course;
    const imageUrl = image || defaultImageUrl; 
    return (
        <>
        <Box display="flex" flexDirection="column" alignItems="center" my={4}>
        <CardMedia
          component="img"
          src={imageUrl}
          alt={course.name}
          style={{ width: '50%', borderRadius: '10%', marginBottom: 16, order: 1 }}
        />
        <Box display="flex" flexDirection="column" alignItems="center" order={2}>
          <Typography variant="h5" style={{ color: UknowTheme.palette.uBlue.main }}>
            {topic}
          </Typography>
          <Typography variant="body1" style={{ color: UknowTheme.palette.uDarkBlue.main }}>
            Difficulty: {difficulty}
          </Typography>
         
        </Box>
        
      </Box>
      <Box sx={{width: '100%' , display :'flex' , justifyContent:'center'}}>
      <RatingStars average={average}  />
      </Box>
       </>
    );
  };
  
  export default CourseDetails;