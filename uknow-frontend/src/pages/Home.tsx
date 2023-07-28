import CourseList from "../elements/CourseList"
import SearchBar from '../components/SearchBar';
import uknowImg from '../assets/uknow.png'
import { Container } from "@mui/system";

function Home() {


  return (
    <div>
        <img src={uknowImg} alt="Uknow image" style={{ width: '100%', height: 'auto' }} />
        <Container  sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
          <SearchBar />
        </Container>
        <CourseList/>
    </div>
  )
}

export default Home