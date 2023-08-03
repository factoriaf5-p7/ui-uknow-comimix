import { useContext, useState } from 'react';
import CourseList from "../components/course/CourseList";
import SearchBar from '../components/elements/SearchBar';
import uknowImg from '../assets/uknow.png';
import { Container } from "@mui/system";
import { useAllCourses } from "../services/useQuery-AllCourses";
import { CourseData } from '../interfaces/course.interface';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { AuthContext } from '../context/AuthContext';

function Home() {
  const { isLoggedIn, user } = useContext(AuthContext); 
  const { isLoading, isError, courseList: allCourses } = useAllCourses();
  const [courses, setCourses] = useState<CourseData[]>([]);
  const [isSearching, setIsSearching] = useState(false);
 

  // Function to filter out courses that the logged-in user has already bought or created
  const filterUserCourses = (courses: CourseData[] | undefined) => {
    if (!isLoggedIn || !user || !courses) {
      return courses; // If no user is logged in, return all courses
    }

    // Filter out courses that the user has already bought or created
    const filteredCourses = courses.filter(course => {
      const isBought = user.bought_courses.some(
        (boughtCourse: { course_id: string }) => boughtCourse.course_id === course._id
      );
      const isCreated = user.created_courses.includes(course._id);
      return !isBought && !isCreated;
    });
  
    return filteredCourses;
  };

  // Handle the search results as before
  const handleAllCourses = (searchResults: CourseData[] | undefined = []) => {
    const filteredSearchResults = filterUserCourses(searchResults);
    if (filteredSearchResults) {
      setCourses(filteredSearchResults);
      setIsSearching(true);
    } else {
      console.error("Error: filteredSearchResults is undefined.");
    }
  };
  
  

  // Filter the courses based on the logged-in user data
  const filteredCourses = filterUserCourses(allCourses);


  return (
    <div>
      <Navbar />
      <img src={uknowImg} alt="Uknow image" style={{ width: '100%', height: 'auto' }} />

      <Container sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
        <SearchBar onSearch={handleAllCourses} />
      </Container>

      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error fetching data</div>
      ) : (
        <CourseList courses={isSearching ? courses : filteredCourses} />
      )}
      <Footer />
    </div>
  );
}

export default Home;