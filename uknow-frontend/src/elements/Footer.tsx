import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set default to false initially
  const navigate = useNavigate(); 

  useEffect(() => {
    // Check if the token exists in localStorage
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Set isLoggedIn to true if token exists, false otherwise
  }, []); // Run this effect only once when the component mounts

  const handleProfilePage = () => {
    navigate('/profile');
  };

  const handleContentPage = () => {
    navigate('/content');
  };

  const handleHomePage = () => {
    navigate('/home');
  };

  const handleLogout = () => {
    // Remove the token from localStorage and update isLoggedIn state
    localStorage.removeItem('token');
    setIsLoggedIn(false); 
    navigate('/login');
    console.log('Estado de inicio de sesión:', isLoggedIn);
  };

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation sx={{ backgroundColor: '#DEA01E' }}>
        {isLoggedIn && (
          <BottomNavigationAction onClick={handleProfilePage} label="Avatar" icon={<AccountCircleIcon />} />
        )}
        {isLoggedIn && (
          <BottomNavigationAction onClick={handleHomePage} label="Library" icon={<LocalLibraryIcon />} />
        )}
        {!isLoggedIn && (
          <BottomNavigationAction onClick={handleLogout} label="Avatar" icon={<AccountCircleIcon />} />
        )}
        {isLoggedIn && (
          <BottomNavigationAction onClick={handleLogout} label="Logout" icon={<LogoutIcon />} />
        )}
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;
