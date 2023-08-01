import { ChangeEvent, useEffect, useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
  onSearch: (searchResults: any[]) => void;
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
      />
     
    </>
  );
}


export default SearchBar