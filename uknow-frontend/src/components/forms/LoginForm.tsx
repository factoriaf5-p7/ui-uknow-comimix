import { Container, Box } from "@mui/material";
import { TextField, Button, Snackbar } from "@mui/material";

import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { UknowTheme } from "../../themes/ThemeUknow";
import MuiAlert from "@mui/material/Alert";
import { useAPIError } from "../../hooks/useAPIError";

export function LoginForm() {
  const { loginData, setLoginData, login } = useContext(AuthContext);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { error, addError, removeError } = useAPIError(); 
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!loginData.email) {
      setEmailError("Please enter your email");
      return;
    }

    if (!loginData.password) {
      setPasswordError("Please enter your password");
      return;
    }

    try {
      login();
    } catch (error) {
    }
  };
  const handleCloseSnackbar = () => {
    removeError();
    };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === "email") {
      setEmailError("");
    }
    if (name === "password") {
      setPasswordError("");
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        maxWidth="sm"
        width="100%"
        component="form"
        onSubmit={handleSubmit}
        sx={{ mt: 4 }}
      >
        <h1 style={{ textAlign: "center" }}>Login</h1>

        <TextField
          label="Email"
          name="email"
          value={loginData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
          error={!!emailError}
          helperText={emailError}
        />
        <TextField
          label="Password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
          type="password"
          error={!!passwordError}
          helperText={passwordError}
        />

        <Box display="flex" justifyContent="center">
          <a href="/signup">Si no tienes cuenta, click aquí</a>
        </Box>
        <Box display="flex" justifyContent="center">
          <a href="/recover">¿Has olvidado tu contraseña?</a>
        </Box>
        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{
              backgroundColor: UknowTheme.palette.uOrange.main,
              color: "#fff",
            }}
            sx={{ fontSize: "1rem", padding: "0.8rem 3rem" }}
          >
            Submit
          </Button>
        </Box>
        <Snackbar open={!!error} autoHideDuration={5000} onClose={handleCloseSnackbar}  sx={{
          position: "absolute",
          top: "-90%", 
          left: "50%", 
          transform: "translateX(-50%)",
          width: '100%' 
        }}>
          <MuiAlert sx={{ width: '100%' }} onClose={handleCloseSnackbar} severity="error" elevation={6} variant="filled">
          {error && <div>{error.message}</div>}
          </MuiAlert>
        </Snackbar>
      </Box>
    </Container>
  );
}