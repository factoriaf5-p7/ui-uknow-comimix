import { useState } from 'react';
import CourseList from "../elements/CourseList";
import SearchBar from '../components/SearchBar';
import uknowImg from '../assets/uknow.png';
import { Container } from "@mui/system";
import { useAllCourses } from "../hooks/useQuery-AllCourses";
import { CourseData } from '../interfaces/course.interface';
import Navbar from '../elements/Navbar';
import Footer from '../elements/Footer';

function Home() {
  const { isLoading, isError, courseList: allCourses } = useAllCourses();
  const [courses, setCourses] = useState<CourseData[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleAllCourses = (searchResults: CourseData[]) => {
    setCourses(searchResults);
    setIsSearching(true);
  };

  const handleClearSearch = () => {
    setCourses(allCourses || []);
    setIsSearching(false);
  };

  return (
    <div>
      <Navbar/>
      <img src={uknowImg} alt="Uknow image" style={{ width: '100%', height: 'auto' }} />
      
      <Container sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
        <SearchBar onSearch={handleAllCourses} onClearSearch={handleClearSearch} />
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
