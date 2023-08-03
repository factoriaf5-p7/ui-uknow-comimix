import {  useState } from 'react';
import CourseList from "../components/course/CourseList";
import SearchBar from '../components/elements/SearchBar';
import uknowImg from '../assets/uknow.png';
import { Container } from "@mui/system";
import { useAllCourses } from "../services/useQuery-AllCourses";
import { CourseData } from '../interfaces/course.interface';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';


function Home() {
  const { isLoading, isError, courseList: allCourses } = useAllCourses();
  const [courses, setCourses] = useState<CourseData[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleAllCourses = (searchResults: CourseData[]) => {
    setCourses(searchResults);
    setIsSearching(true);
  };

  return (
    <div>
      <Navbar/>
      <img src={uknowImg} alt="Uknow image" style={{ width: '100%', height: 'auto' }} />
      
      <Container sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
        <SearchBar onSearch={handleAllCourses} />
      </Container>

      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error fetching data</div>
      ) : (
        <CourseList courses={isSearching ? courses : allCourses} />
      )}
      
      <Footer/>
    </div>
  );
}

export default Home;
