import { useState, useEffect } from "react";
import LoginBtn from "../components/LoginBtn";
import LogoNavbar from "../components/LogoNavbar";
import LogoutBtn from "../components/LogoutBtn";
import SignupBtn from "../components/SignupBtn";


const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogin = () => {
    
    localStorage.setItem('token', 'example-token'); 
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
  
    localStorage.removeItem('token'); 
    setIsLoggedIn(false);
  };


  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
      <LogoNavbar />
      <div>
        {!isLoggedIn ? (
          <>
            <LoginBtn />
            <SignupBtn />
          </>
        ) : (
          <LogoutBtn  />
        )}
      </div>
    </nav>
  );
};

export default Navbar;




