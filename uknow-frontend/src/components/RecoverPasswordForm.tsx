import { Container, Box } from "@mui/system"
import { TextField, Button } from "@mui/material"

function RecoverPasswordForm() {

    const handleSubmit = () => {
        alert('Has been sent an email to recover your password');
    }

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
      <h1 style={{ textAlign: "center" }}>Recuperación de contraseña</h1>
     
      <TextField
        label="Email"
        name="email"
        // value={register.email}
        // onChange={handleChangeInput}
        fullWidth
        margin="normal"
        variant="outlined"
      />
  
      <Box display="flex" justifyContent="center" mt={2} >
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Box>
    </Box>
  </Container>
  )
}

export default RecoverPasswordForm