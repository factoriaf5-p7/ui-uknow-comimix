import { useState } from 'react';
import { TextField, IconButton, Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { SearchCourses } from '../hooks/useQuery-SearchCourses';

interface SearchBarProps {
  onSearch: (searchResults: CourseData[]) => void;
  onClearSearch: () => void;
}

export default function SearchBar({ onSearch, onClearSearch }: SearchBarProps) {
  const [searchText, setSearchText] = useState('');
  const { searchResults } = SearchCourses(searchText);
  const [showNoCoursesFound, setShowNoCoursesFound] = useState(false);

  const handleSearch = () => {
    // No hace nada si esta vacia
    if (searchText.trim() === '') {
      return;
    }

    if (searchResults && searchResults.length === 0) {
      setShowNoCoursesFound(true);
      onSearch([]);
    } else {
      setShowNoCoursesFound(false);
      onSearch(searchResults || []);
    }
  };

  const handleClearSearch = () => {
    setSearchText('');
    onClearSearch();
    setShowNoCoursesFound(false); 
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box>
        <TextField
          label="Search for courses"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <IconButton onClick={handleSearch}>
          <SearchIcon />
        </IconButton>
        <Button onClick={handleClearSearch}>Clear Search</Button>
      </Box>

      {showNoCoursesFound && searchResults !== undefined && searchResults.length === 0 && searchText && (
        <Box mt={2}>No courses found.</Box>
      )}
    </Box>
  );
}
