import { ChangeEvent, SetStateAction, useContext, useEffect, useState } from "react";
import UserInfo from "../../components/UserInfo/UserInfo";
import "./Profile.css"
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "../../components/navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";

// const {user}=useContext(AuthContext)

function Profile() {
  const [firstName, setFirstName] = useContext(AuthContext);
  const [lastName, setLastName] = useContext(AuthContext);
  const [tempFirstName, setTempFirstName] = useState('');
  const [tempLastName, setTempLastName] = useState('');


  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTempFirstName(event.target.value);
  };

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTempLastName(event.target.value);
  };

  // const handleFirstNameChange = (event: { target: { value: SetStateAction<string>; }; }) => {
  //   setTempFirstName(event.target.value);
  // };

  // const handleLastNameChange = (event: { target: { value: SetStateAction<string>; }; }) => {
  //   setTempLastName(event.target.value);
  // };

  const handleSubmit = () => {
    setFirstName(tempFirstName);
    setLastName(tempLastName);
    // const data = { firstName: tempFirstName, lastName: tempLastName };

   

    useEffect(() => {
      // Aquí podrías realizar alguna lógica adicional después de actualizar el estado,
      // o incluso realizar una nueva solicitud para obtener los datos actualizados del usuario.
      // Por ejemplo, podrías hacer otra solicitud GET para obtener los datos actualizados del perfil del usuario y actualizar el estado en consecuencia.
      // Esta función se ejecutará después de que se actualice el estado de firstName y lastName.
  
      // Ejemplo: Simulación de solicitud GET para obtener datos actualizados del usuario
      fetch('http://localhost:3000/users/profile', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
      })
        .then((response) => response.json())
        .then((responseData) => {
          // Supongamos que el servidor responde con los datos del usuario actualizados
          const { firstName: updatedFirstName, lastName: updatedLastName } = responseData;
  
          // Actualizar el estado con los datos del usuario actualizados
          setFirstName(updatedFirstName);
          setLastName(updatedLastName);
        })
        .catch((error) => {
          console.error('Error al obtener los datos actualizados del usuario:', error);
        });
    }, [firstName, lastName]);
 
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
}}

export default Profile;


