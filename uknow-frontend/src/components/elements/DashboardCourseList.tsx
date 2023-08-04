import { SyntheticEvent, useState } from 'react'
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
import DeleteCourseModal from '../modals/DeleteCourseModal';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import useDeleteCourseMutation from '../../services/useDeleteCourseMutation';

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

    const { isLoggedIn, user, } = useContext(AuthContext);
    const [courseId, setCourseId] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const deleteCourseMutation = useDeleteCourseMutation();

    const handleOpenModal = (id: string) => {
        // if (isLoggedIn) {
        // setIsModalOpen(true);
        // } else {
        // navigate('/login');
        // }
        setCourseId(id);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleDeleteCourse = () => {
        console.log('courseId', courseId)
        deleteCourseMutation.mutate({ _id: courseId, userId: user._id });
        handleCloseModal();
    }
    
    return (
        <>
        <Box sx={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', marginTop: '50px', paddingLeft: '10px' }}>
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
                listType === 'Created' ?
                    (
                        <>
                        <Box>
                            <Button sx={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}><Link to='/create'>New Course</Link></Button>
                        </Box>
                        {
                            courseList && courseList.map(course => {
                                return (
                                    <ListItem key={course._id} secondaryAction={
                                        <div>
                                            <IconButton edge="end" aria-label="edit"> <Link to='/edit' state={course._id}><EditNote /></Link> </IconButton>
                                            <IconButton edge="end" aria-label="delete" onClick={(e) => handleOpenModal(course._id, e)}> <DeleteIcon /></IconButton>
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
                                        <Link to='/course' state={course}>{course.name}</Link>
                                        }/>
                                </ListItem>
                            )
                        })
                    )
                }
                </List>
            </Grid>
        </Box>
        <DeleteCourseModal open={isModalOpen} onClose={handleCloseModal} onConfirm={handleDeleteCourse} /> 
        </>
    )
}

export default DashboardCourseList