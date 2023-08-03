import { SetStateAction, useState } from "react";
import UserInfo from "../../components/UserInfo/UserInfo";
import "./Profile.css"
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "../../components/navbar/Navbar";
// import { AuthContext } from "../../context/AuthContext";


// const {user}=useContext(AuthContext)

function Profile() {
  const [firstName, setFirstName] = useState('Diego');
  const [lastName, setLastName] = useState('Future');
  const [tempFirstName, setTempFirstName] = useState('');
  const [tempLastName, setTempLastName] = useState('');


  const handleFirstNameChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setTempFirstName(event.target.value);
  };

  const handleLastNameChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setTempLastName(event.target.value);
  };

  const handleSubmit = () => {
    setFirstName(tempFirstName);
    setLastName(tempLastName);
    const data = { firstName: tempFirstName, lastName: tempLastName };

   

    fetch('http://localhost:3000/users/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        
        console.log('Respuesta del servidor:', responseData);
  
       
        setFirstName(tempFirstName);
        setLastName(tempLastName);
  
        
        setTempFirstName('');
        setTempLastName('');
      })
      .catch((error) => {
        console.error('Error al enviar los datos:', error);
      });
  };

  
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; 
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string); 
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="MainProfileDiv">
      <Navbar />
      <div className="profile-container">
        <div className="top-portion">
          
          <div className="user-profile-bg-image">
            <img
              id="prf-bg-img"
              src="https://ik.imagekit.io/uknow/uknow.png?updatedAt=1690967990373"
              alt="uknow background img"
            />
          </div>
          
      
          <div className="user-profile-img">
          <Avatar
  alt="Avatar"
  src={profileImage || "https://ik.imagekit.io/uknow/avatar.avif?updatedAt=1690968410944"}
  sx={{ width: '200px', height: '200px' }}
/>

      </div>
      <div className="userNam">{firstName} {lastName}</div>
       <input className="image-input" type="file" onChange={handleImageChange} />
          </div>
          
        <div className="bottom-portion">
          <div className="right-side">
          <UserInfo />
          
            
          </div>

          <div className="left-side">
          <form>
              <TextField
                label="Nombre"
                value={tempFirstName}
                onChange={handleFirstNameChange}
                fullWidth
                variant="outlined"
                margin="normal"
              />
              <TextField
                label="Apellido"
                value={tempLastName}
                onChange={handleLastNameChange}
                fullWidth
                variant="outlined"
                margin="normal"
              />
              <Button variant="contained" color="primary" onClick={handleSubmit}>
                Guardar cambios
              </Button>
            </form>
            
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Profile;


