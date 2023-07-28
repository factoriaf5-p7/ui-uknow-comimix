import { useState } from 'react';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

  //falta implementar cambio de ustario de login/logout

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate(); 

  const handleProfilePage = () => {
    navigate('/profile');
  };

  const handleContentPage = () => {
    navigate('/content');
  };
// falta utilizar ruta para despues de hacer login
  const handleHomePage = () => {
    navigate('');
  };

  const handleLogout = () => {
    setIsLoggedIn(!isLoggedIn); 
    navigate('/');
    console.log('Estado de inicio de sesión:', isLoggedIn);
  };

// falta utilizar colores globales

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation sx={{ backgroundColor: '#DEA01E' }}>
        {isLoggedIn && (
          <BottomNavigationAction onClick={handleProfilePage} label="Avatar" icon={<AccountCircleIcon />} />
        )}
        {isLoggedIn && (
          <BottomNavigationAction onClick={handleContentPage} label="Library" icon={<LocalLibraryIcon />} />
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
