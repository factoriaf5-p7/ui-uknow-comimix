import { Button } from '@mui/material';

import { useNavigate } from 'react-router-dom';


const LogoutBtn = () => {
    const navigate = useNavigate();

    const handleLogout = () => {

      navigate('/home');
    };
  
    return (
      <Button variant="outlined" color="secondary" onClick={handleLogout}>
        Cerrar sesión
      </Button>
      
    );
}

export default LogoutBtn