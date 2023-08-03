import React from 'react'
import { Box } from '@mui/system';
import { Button, Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { ListItemText } from '@mui/material';
import { EditNote } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { CourseData } from '../../interfaces/course.interface';

interface DashboardList {
    courseList: CourseData[];
    isLoading: boolean,
    isError: boolean,
    listType: string;
    prop: Props;
}

interface Props {
    prop: DashboardList
}

function DashboardCourseList(props: Props) {

    const { isLoading, isError, courseList, listType } = props.prop;
    
    return (
        <Box sx={{ border: '1px solid blue', marginTop: '50px', paddingLeft: '10px' }}>
        <Grid item xs={12} md={6}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    {listType} courses
            </Typography>  
                <List>
                {isLoading ? 
                    ( <div>Loading courses...</div> )
                    :
                isError ?
                    ( <div>Error consultando los cursos</div>)
                    :
                listType === 'Bought' ?
                    (   
                        <>
                            <Button></Button>
                            {
                                courseList && courseList.map(course => {
                                    return (
                                        <ListItem key={course._id} secondaryAction={
                                            <div>
                                                <IconButton edge="end" aria-label="edit"> <EditNote /> </IconButton>
                                                <IconButton edge="end" aria-label="delete"> <DeleteIcon /> </IconButton>
                                            </div>
                                        }>
                                            <ListItemText primary={
                                                <Link to='/edit' state={course._id}>{course.name}</Link>
                                                }/>
                                        </ListItem>
                                    )
                                })
                            }
                        </> 
                    )
                    :
                    (
                        courseList && courseList.map(course => {
                            return (
                                <ListItem key={course._id}>
                                    <ListItemText primary={
                                        <Link to='/edit' state={course._id}>{course.name}</Link>
                                        }/>
                                </ListItem>
                            )
                        })
                    )
                }
                </List>
            </Grid>
        </Box>
    )
}

export default DashboardCourseList