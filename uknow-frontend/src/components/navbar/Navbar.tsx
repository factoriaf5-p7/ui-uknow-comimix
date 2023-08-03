import { useContext } from "react";
import LoginBtn from "../buttons/LoginBtn";
import LogoNavbar from "./LogoNavbar";
import {
  AppBar,
  Slide,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { AuthContext } from "../../context/AuthContext";
import { UknowTheme } from "../../themes/ThemeUknow";
 import AvatarBtn from "../buttons/AvatarBtn";
import UserBalance from "./UserBalance";



export default function HideAppBar() {
  const trigger = useScrollTrigger();
  const {isLoggedIn} = useContext(AuthContext);
  const theme = useTheme();
 

  const isDesktop = useMediaQuery(theme.breakpoints.only("desktop"));

  if (isDesktop)
  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar sx={{ backgroundColor: UknowTheme.palette.uOrange.main }}>
          <Toolbar
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row", 
              alignItems: "center",
              padding: "10px",
           
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <LogoNavbar />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              {!isLoggedIn ? (
                <>
                  <LoginBtn />
                </>
              ) : (
                < div style={{gap : '1rem' , display : 'flex', flexDirection : 'row'}}>
                  <>
                  <UserBalance />
                  </>
                  <>
                  <AvatarBtn />
                  </>
                </div>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </Slide>
    </>
  );
}

