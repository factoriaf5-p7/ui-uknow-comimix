import React, { useContext, useEffect } from 'react'
import CreateCourseForm from '../components/forms/CreateCourseForm'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

function CreateCourse() {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect( () => {
    if(!isLoggedIn) navigate('/login');
  }, []);

  return (
    <CreateCourseForm />
  )
}

export default CreateCourse