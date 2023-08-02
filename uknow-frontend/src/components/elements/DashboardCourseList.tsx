import React from 'react'
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { ListItemText } from '@mui/material';
import { useCreatedCourses } from '../../services/useCreatedCourses';
import { EditNote } from '@mui/icons-material';

function DashboardCourseList() {

    const { isLoading, isError, courseList } = useCreatedCourses('64c7a7ccbb9cc787c92592f9');

    return (
        <Box sx={{ border: '1px solid blue', marginTop: '80px', paddingLeft: '10px' }}>
        <Grid item xs={12} md={6}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    Created courses
            </Typography>  
                <List>
                {isLoading ? 
                    ( <div>Loading courses...</div> )
                    :
                isError ?
                    ( <div>Error consultando los cursos</div>)
                    :
                    (
                        courseList && courseList.map(course => {
                            return (<ListItem key={course._id} secondaryAction={
                                            <div>
                                                <IconButton edge="end" aria-label="edit"> <EditNote /> </IconButton>
                                                <IconButton edge="end" aria-label="delete"> <DeleteIcon /> </IconButton>
                                            </div>
                                        }>
                                <ListItemText primary={course.name}/>
                                </ListItem>)
                        })
                    )
                }
                </List>
            </Grid>
        </Box>
    )
}

export default DashboardCourseList