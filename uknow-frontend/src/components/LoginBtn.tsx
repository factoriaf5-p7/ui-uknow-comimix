import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
  const navigate = useNavigate();

 

  const handleLogin = () => {

    navigate('/login');
  };

  return (
    <Button variant="contained" color="primary" onClick={handleLogin}>
      Iniciar sesión
    </Button>
  );
};

export default LoginButton;