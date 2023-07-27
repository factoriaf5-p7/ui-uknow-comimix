import { useMutation /* useQueryClient */ } from "@tanstack/react-query";
import { useState, ChangeEvent, FormEvent } from "react";
import {
  Box,
  Container,
  TextField,
  Button,
  ThemeProvider,
} from "@mui/material";
import { UknowTheme } from "../themes/ThemeUknow.tsx";

interface RegisterState {
  name: string;
  last_name: string;
  email: string;
  password: string;
}

const createUser = async (userData: RegisterState) => {
  const response = await fetch("http://localhost:3000/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  const data = await response.json();
  return data;
};

export const RegistrationForm = () => {
  const [register, setRegister] = useState<RegisterState>({
    name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "confirmPassword") {
      setConfirmPassword(value);
    } else {
      setRegister({
        ...register,
        [name]: value,
      });
    }
  };

  /*   const queryClient = useQueryClient();
   */
  const createUserMutation = useMutation(createUser, {
    onSuccess: () => {

      alert("User registration successful!");
      /*       queryClient.invalidateQueries("users");
       */
    },
    onError: (error) => {
      console.error("Registration error:", error);
    },
  });


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!register.password || !confirmPassword) {
      alert("Please fill in both password and confirm password fields.");
      return;
    }

    if (register.password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }
    createUserMutation.mutate(register);
  };

  return (
    <ThemeProvider theme={UknowTheme}>
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
          <h1 style={{ textAlign: "center" }}>Signup</h1>
          <TextField
            label="Name"
            name="name"
            value={register.name}
            onChange={handleChangeInput}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Surname"
            name="last_name"
            value={register.last_name}
            onChange={handleChangeInput}
            fullWidth
            margin="normal"
            variant="outlined"
            type="text"
          />
          <TextField
            label="Email"
            name="email"
            value={register.email}
            onChange={handleChangeInput}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Password"
            name="password"
            value={register.password}
            onChange={handleChangeInput}
            fullWidth
            margin="normal"
            variant="outlined"
            type="password"
          />
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChangeInput}
            fullWidth
            margin="normal"
            variant="outlined"
            type="password"
          />
          <Box display="flex" justifyContent="center" mt={2}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
