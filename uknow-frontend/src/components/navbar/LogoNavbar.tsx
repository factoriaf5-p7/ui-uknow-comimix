
import { useNavigate } from 'react-router-dom';
import logoImage from '../../assets/uknow 1_preview_rev_1.png'; 

const Logo = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/home');
  };

  return (
    <img
      src={logoImage}
      alt="Mi Logo"
      style={{ width: '100px', height: 'auto', cursor: 'pointer' }}
      onClick={handleLogoClick}
    />
  );
};

export default Logo;
