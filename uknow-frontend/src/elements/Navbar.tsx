import {  useContext } from "react";
import LoginBtn from "../components/LoginBtn";
import LogoNavbar from "../components/LogoNavbar";
import LogoutBtn from "../components/LogoutBtn";
import SignupBtn from "../components/SignupBtn";
import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { AuthContext } from "../context/AuthContex";


const Navbar = () => {

  const { isLoggedIn } = useContext(AuthContext);
  const theme = useTheme();



  const isDesktop = useMediaQuery(theme.breakpoints.only('desktop'));
if(isDesktop)
  {return (
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
}
export default Navbar;




