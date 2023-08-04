import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { Box, Container, TextField, Button } from "@mui/material";
import { UknowTheme } from '../../themes/ThemeUknow';
import { useUserProfileMutation } from "../../services/useProfileMutation";


export const ProfileForm = () => {
  const [profile, setProfile] = useState({
    _id:'',
    name: '',
    last_name: '',
    email: '',
    wallet_balance: '',
    chat_notifications_recived:[],
    chat_notifications_sent:[],
    
  });



  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
      setProfile({
        ...profile,
        [name]: value,
      });
    
  };

  const userProfileMutation = useUserProfileMutation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    userProfileMutation.mutate({_id: profile._id, name: profile.name, last_name: profile.last_name});
    localStorage.setItem('user', JSON.stringify(profile));
  };

  useEffect(()=>{
    const userString = localStorage.getItem('user') as string;
    const user = JSON.parse(userString);
    setProfile(user);
  },[])

  return (
      <Container
        sx={{
          display: "flex",
          alignItems: "top",
          justifyContent: "center",
          height: "100vh",
          marginTop:"80px"
        }}
      >
        <Box
          maxWidth="sm"
          width="100%"
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 1 }}
        >
          <h1 style={{ textAlign: "center" }}>Profile</h1>
          <TextField
            label="Name"
            name="name"
            value={profile.name}
            onChange={handleChangeInput}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Lastname"
            name="last_name"
            value={profile.last_name}
            onChange={handleChangeInput}
            fullWidth
            margin="normal"
            variant="outlined"
            type="text"
          />
          <TextField
            label="Email"
            name="email"
            value={profile.email}
            onChange={handleChangeInput}
            fullWidth
            margin="normal"
            variant="outlined"
            disabled= {true}
          />
          <TextField
            label="Wallet"
            name="wallet"
            value={profile.wallet_balance}
            onChange={handleChangeInput}
            fullWidth
            margin="normal"
            variant="outlined"
            disabled= {true}

          />
          <TextField
            label="Chat Notifications Recived"
            name="chat_notifications_recived"
            value={profile.chat_notifications_recived}
            onChange={handleChangeInput}
            fullWidth
            margin="normal"
            variant="outlined"
            disabled= {true}

          />
         

         <TextField
            label="Chat Notifications Sent"
            name="chat_notifications_sent"
            value={profile.chat_notifications_sent}
            onChange={handleChangeInput}
            fullWidth
            margin="normal"
            variant="outlined"
            disabled= {true}

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