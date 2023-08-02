import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignupBtn = () => {
    const navigate = useNavigate();

    return (
      <Button variant="outlined" color="primary" onClick={() => navigate('/signup')}>
        Registrarse
      </Button>
    );
}

export default SignupBtn