import { useContext } from 'react';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { UknowTheme } from '../../themes/ThemeUknow';
import { AuthContext } from '../../context/AuthContext';
import WalletBalance from './WalletBalanceFooter';


const Footer = () => {
  const { isLoggedIn, logout, user } = useContext(AuthContext); // Asegúrate de tener la propiedad "wallet_balance" en el contexto
  const navigate = useNavigate();

  const handleProfilePage = () => {
    navigate('/profile');
  };

  const handleDashboard = () => {
    navigate('/dashboard');
  };

  const handleHomePage = () => {
    navigate('/home');
  };

  const handleLogout = () => {
    navigate('/login');
    logout();
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only('mobile'));

  if (isMobile) {
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation sx={{ backgroundColor: UknowTheme.palette.uOrange.main }}>
        {isLoggedIn ? (
          [
            <WalletBalance  key="wallet" balance={user.wallet_balance} />,
            <BottomNavigationAction key="profile" onClick={handleProfilePage} label="Avatar" icon={<AccountCircleIcon />} />,
            <BottomNavigationAction key="library" onClick={handleHomePage} label="Library" icon={<LocalLibraryIcon />} />,
            <BottomNavigationAction key="dashboard" onClick={handleDashboard} label="Dashboard" icon={<DashboardIcon />} />,
            <BottomNavigationAction key="logout" onClick={handleLogout} label="Logout" icon={<LogoutIcon />} />,
          ]
        ) : (
          [
            <BottomNavigationAction key="library" onClick={handleHomePage} label="Library" icon={<LocalLibraryIcon />} />,
            <BottomNavigationAction key="avatar" onClick={handleLogout} label="Avatar" icon={<AccountCircleIcon />} />
          ]
        )}
      </BottomNavigation>
    </Paper>
  );
};
return null
}

export default Footer;
