import { useContext } from "react";
import LoginBtn from "../components/LoginBtn";
import LogoNavbar from "../components/LogoNavbar";
import {
  AppBar,
  Slide,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { AuthContext } from "../context/AuthContex";
import { UknowTheme } from "../themes/ThemeUknow";
import AvatarBtn from "../components/AvatarBtn";

export default function HideAppBar() {
  const trigger = useScrollTrigger();
  const { isLoggedIn } = useContext(AuthContext);
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
                alignItems: "center",
                padding: "10px",
              }}
            >
              <LogoNavbar />
              <div>
                {!isLoggedIn ? (
                  <>
                    <LoginBtn />
                  </>
                ) : (
                  <AvatarBtn/>
                )}
              </div>
            </Toolbar>
          </AppBar>
        </Slide>
      </>
    );
}

