import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Footer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, );

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
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  // Obtener el tema actual
  const theme = useTheme();

  // Verificar si el breakpoint actual coincide con el valor de 'mobile'
  const isMobile = useMediaQuery(theme.breakpoints.only('mobile'));

  // Si el breakpoint actual coincide con el valor de 'mobile', renderiza el Footer
  if (isMobile) {
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
  }

  // Si no es un dispositivo móvil, no renderiza nada
  return null;
};

export default Footer;
