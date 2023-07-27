import { Stack } from '@mui/system'
import InputAdornment from '@mui/material/InputAdornment';
import { Search } from '@mui/icons-material'
import { Button, OutlinedInput } from '@mui/material';

function SearchBar() {
  return (
    <Stack direction='row' >
        <OutlinedInput id="input-with-icon-adornment" startAdornment={
            <InputAdornment position="start">
                <Button sx={{ paddingLeft: '0px', width: '15%'}}>
                    <Search sx={{ paddingLeft: '0px' }}/>
                </Button>
            </InputAdornment>
            }
            sx={{ paddingLeft: '0px'}}
        />
    </Stack>
  )
}

export default SearchBar