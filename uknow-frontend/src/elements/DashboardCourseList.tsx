import React from 'react'
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { ListItemText } from '@mui/material';


function generate(element: React.ReactElement) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

function DashboardCourseList() {

    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    return (
        <Box>
        <Grid item xs={12} md={6}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                Avatar with text and icon
            </Typography>
            
                <List dense={dense}>
                {generate(
                    <ListItem
                    secondaryAction={
                        <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                        </IconButton>
                    }
                    >
                    <ListItemText
                        primary="Single-line item"
                        secondary={secondary ? 'Secondary text' : null}
                    />
                    </ListItem>,
                )}
                </List>
            </Grid>
        </Box>
    )
}

export default DashboardCourseList