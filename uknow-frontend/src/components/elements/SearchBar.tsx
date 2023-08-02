import { ChangeEvent, useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { CourseData } from '../../interfaces/course.interface';
import { useAllCourses } from '../../services/useQuery-AllCourses';


interface SearchBarProps {
  onSearch: (searchResults: CourseData[] | undefined) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [searchText, setSearchText] = useState('');

  const { isLoading, isError, courseList } = useAllCourses();

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>An error has occurred while retrieving the data.</div>;

  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const searchText = e.target.value;
      setSearchText(searchText);

      if (!searchText.trim()) {
        onSearch(courseList);
      } else {
        const response = await fetch(
          `http://localhost:3000/courses/search?filters=name,description,tags&keywords=${encodeURIComponent(
            searchText
          )}`
        );
        const data = await response.json();
        onSearch(data.data);
      }
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  return (
    <>
      <TextField
        label="Search for courses"
        value={searchText}   
        onChange={handleSearch}
        sx={{ width: '90%' ,  maxWidth:'1400px'  }}
      />
     
    </>
  );
}


export default SearchBar;