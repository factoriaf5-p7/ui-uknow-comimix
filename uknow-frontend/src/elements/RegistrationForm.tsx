import { useMutation, /* useQueryClient */ } from "@tanstack/react-query";
import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";
import { Box, Container, TextField, Button } from "@mui/material"

interface RegisterState {
    name: string;
    last_name: string;
    email: string;
    password: string;
  }

  const createUser = async (userData: RegisterState) => {
    const response = await axios.post("http://localhost:3000/auth/signup", userData);
    return response.data;
  };

  
  export const RegistrationForm = () => {
    const [register, setRegister] = useState<RegisterState>({
      name: "",
      last_name: "",
      email: "",
      password: "", 
    });
  
    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegister({
      ...register,
      [name]: value,
    });
  };

/*   const queryClient = useQueryClient();
 */
  const createUserMutation = useMutation(createUser, {
    onSuccess: () => {
      // Reset the form after successful submission
      setRegister({
        name: "",
        last_name: "",
        email: "",
        password: "",
      });
      alert("User registration successful!");

      // Invalidate and refetch the query to update the user list after successful registration
/*       queryClient.invalidateQueries("users");
 */    },
    onError: (error) => {
      console.error("Registration error:", error);
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUserMutation.mutate(register);
  };

  return (
    <Container maxWidth="sm">
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
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
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>
    </Container>
  );
};