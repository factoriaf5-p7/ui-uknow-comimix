import { useState } from 'react';
import CourseList from "../elements/CourseList";
import SearchBar from '../components/SearchBar';
import uknowImg from '../assets/uknow.png';
import { Container } from "@mui/system";
import { useAllCourses } from "../hooks/useQuery-AllCourses";
import { CourseData } from '../interfaces/course.interface';

function Home() {
  const { isLoading, isError, courseList: allCourses } = useAllCourses();
  const [courses, setCourses] = useState<CourseData[]>([]);

  const handleAllCourses = (courses: CourseData[]) => {
    setCourses(courses);
  };

  return (
    <div>
      <img src={uknowImg} alt="Uknow image" style={{ width: '100%', height: 'auto' }} />
      <Container sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
        {/* Passar a função handleAllCourses como a prop onSearch */}
        <SearchBar onSearch={handleAllCourses} />
      </Container>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error fetching data</div>
      ) : (
        <CourseList initialCourses={courses.length === 0 ? allCourses : courses} />
      )}
    </div>
  );
}

export default Home;
