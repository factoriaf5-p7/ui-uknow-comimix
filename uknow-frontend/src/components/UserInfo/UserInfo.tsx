import './UserInfo.css'
import { useState, useEffect } from 'react';

interface UserInfo {
    firstName: string;
    lastName: string;
    boughtCourses: string[];
    createdCourses: string[];
  }
  
  function UserInfo() {
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  
    useEffect(() => {
      
      fetch('http://localhost:3000/users/profile', {
        method: 'GET',
        headers: {
         
        },
      })
        .then((response) => response.json())
        .then((data) => {
          
          setUserInfo(data);
        })
        .catch((error) => {
          console.error('Error al obtener la información del usuario:', error);
        });
    }, []); 
  
    return (
      <div className='Main-UserInfo-Container'>
        <h4>User Info</h4>
        <hr id='hr_info'/>
        <div className="info-container">
          {userInfo ? (
            <>
              <div className="user-name">
                <h6>Name: {userInfo.firstName}</h6>
              </div>
              <div className="user-lastname">
                <h6>Lastname: {userInfo.lastName}</h6>
              </div>
              <div className="bought-courses">
                <h6>Bought Courses: {userInfo.boughtCourses.join(', ')}</h6>
              </div>
              <div className="created-courses">
                <h6>Created Courses: {userInfo.createdCourses.join(', ')}</h6>
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    );
  }
  

export default UserInfo;