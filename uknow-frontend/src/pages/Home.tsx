import { useState } from 'react';
import { Container } from '@mui/material';
import CourseList from '../elements/CourseList';
import SearchBar from '../components/SearchBar';
import uknowImg from '../assets/uknow.png';
import { useAllCourses } from '../hooks/useQuery-AllCourses';
import { CourseData } from '../interfaces/course.interface';


function Home() {
  const { isLoading, isError, courseList: allCourses } = useAllCourses();
  const [searchResults, setSearchResults] = useState<CourseData[] | null>(null);

  const handleSearch = async (keywords: string) => {
    try {
      const response = await fetch(`http://localhost:3000/courses/search?keywords=${keywords}`);
      const data = await response.json();
      setSearchResults(data.data);
      console.log("hello pasa aqui");
      console.log(data.data);

    } catch (error) {
      console.error('Error while fetching search results:', error);
      setSearchResults([]);
    }
  };

  const clearSearchResults = () => {
    setSearchResults(null);
  };

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>An error has occurred while retrieving the data.</div>;

  return (
    <div>
      <img src={uknowImg} alt="Uknow image" style={{ width: '100%', height: 'auto' }} />
      <Container sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
        <SearchBar onSearch={handleSearch} />
      </Container>
      {searchResults !== null ? ( 
        <>
          <Container sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
            <button onClick={clearSearchResults}>Back</button>
          </Container>
          <CourseList courseList={searchResults} />
        </>
      ) : (
        <CourseList courseList={allCourses} />
      )}
    </div>
  );
}

export default Home;
