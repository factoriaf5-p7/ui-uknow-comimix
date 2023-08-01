import { ChangeEvent, useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { CourseData } from '../interfaces/course.interface';


interface SearchBarProps {
  onSearch: (searchResults: CourseData[]) => void;
}


function SearchBar({ onSearch }: SearchBarProps) {
  const [searchText, setSearchText] = useState('');
 

  useEffect(() => {
    // Función para realizar la búsqueda automáticamente cada vez que cambie el texto del TextField
    const handleSearch = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/courses/average`
        );
        const data = await response.json();
        onSearch(data.data); // estrutura { data: [] }.
      } catch (error) {
        console.error('Error during search:', error);
      }
    };

    handleSearch();
  }, []);


  const handleSearch = async (e:ChangeEvent<HTMLInputElement>) => {
    try {
      setSearchText(e.target.value);
      const response = await fetch(`http://localhost:3000/courses/search?filters=name,description,tags&keywords=${e.target.value}`);
      const data = await response.json();
     
      onSearch(data.data); // estrutura { data: [] }.
      console.log(data.data)
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


export default SearchBar