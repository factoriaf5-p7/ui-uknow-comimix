import { useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
  onSearch: (searchResults: any[]) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:3000/courses/search?filters=name&keywords=${searchText}`);
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
        onChange={(e) => setSearchText(e.target.value)}
      />
      <IconButton onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </>
  );
}
