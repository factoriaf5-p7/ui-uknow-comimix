import { useState, ChangeEvent, FormEvent } from "react";
import { Box, Container, TextField, Button } from "@mui/material";
import { useUserRegistrationMutation } from "../../services/useMutation-UserRegistration";
import { UknowTheme } from '../../themes/ThemeUknow';

export const RegistrationForm = () => {
  const [register, setRegister] = useState({
    name: '',
    last_name: '',
    email: '',
    password: '',
  });

  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'confirmPassword') {
      setConfirmPassword(value);
    } else {
      setRegister({
        ...register,
        [name]: value,
      });
    }
  };

  const userRegistrationMutation = useUserRegistrationMutation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!register.password || !confirmPassword) {
      alert('Please fill in both password and confirm password fields.');
      return;
    }

    if (register.password !== confirmPassword) {
      alert('Passwords do not match. Please try again.');
      return;
    }
    console.log(register);
    // userRegistrationMutation.mutate():
    // This function is used to trigger the mutation. It takes the register state (user registration data) as an argument 
    // and sends it to the server using the createUser function. When you call userRegistrationMutation.mutate(register), 
    // React Query will execute the mutation, which performs the POST request to the server to create the user.
    userRegistrationMutation.mutate(register);
  };

  return (
      <Container
        sx={{
          display: "flex",
          alignItems: "top",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box
          maxWidth="sm"
          width="100%"
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 1 }}
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
      
          <Box display="flex" justifyContent="center" mt={2} >
            <Button type="submit" variant="contained" color="primary" style={{ backgroundColor: UknowTheme.palette.uOrange.main, color: '#fff' }} sx={{ fontSize: '1rem', padding: '0.8rem 3rem' }}>
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
  );
};
