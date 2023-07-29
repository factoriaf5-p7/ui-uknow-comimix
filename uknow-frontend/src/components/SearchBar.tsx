
// import { Stack } from '@mui/system';
// import InputAdornment from '@mui/material/InputAdornment';
// import { Search } from '@mui/icons-material';
// import { Button, OutlinedInput } from '@mui/material';

// function SearchBar() {
//   return (
//     <Stack direction='row'>
//       <OutlinedInput
//         id="input-with-icon-adornment"
//         startAdornment={
//           <InputAdornment position="start">
//             <Button sx={{ paddingLeft: '0px', width: '15%'}}>
//               <Search sx={{ paddingLeft: '0px' }}/>
//             </Button>
//           </InputAdornment>
//         }
//         placeholder="Search"
//         sx={{
//           width: '100%',
//           '& .MuiOutlinedInput-input': {
//           },
//         }}
//       />
//     </Stack>
//   );
// }

// export default SearchBar;

import { useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
  onSearch: (searchText: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  

  return (
    <>
      <TextField
        label="Search for courses"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyPress={handleKeyPress}
        sx={{ mr: 1, width: '300px' }}
      />
      <IconButton onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </>
  );
}

