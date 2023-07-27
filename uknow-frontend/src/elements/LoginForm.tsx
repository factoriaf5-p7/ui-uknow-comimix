import React from 'react'

function LoginForm() {
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
  
      <Box display="flex" justifyContent="center" mt={2} >
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Box>
    </Box>
  </Container>
  )
}

export default LoginForm