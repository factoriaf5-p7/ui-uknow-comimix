import { Container, Box } from "@mui/system";
import { TextField, Button } from "@mui/material";

import { ChangeEvent, FormEvent, useContext} from "react";
import { AuthContext } from "../context/AuthContex";

export function LoginForm() {
 
  const {loginData, setLoginData , login} = useContext(AuthContext);

 

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

   login()
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
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
        />

        <Box display="flex" justifyContent="center">
          <a href="/signup">Si no tienes cuenta, click aquí</a>
        </Box>
        <Box display="flex" justifyContent="center">
          <a href="/recover">¿Has olvidado tu contraseña?</a>
        </Box>
        <Box display="flex" justifyContent="center" mt={2}>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
