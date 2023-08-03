import { createContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from 'react';
import LoginData from '../interfaces/login.interface';
import { useLoginUser } from '../services/useMutation-LoginUser';
import { User } from '../interfaces/user.interface';
import { useUserProfile } from '../services/useQuery-AllUsers';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';

interface UserContextType extends User {}

const initialUserContext: UserContextType = {
        _id: '',
        name: '',
        last_name: '',
        email: '',
        wallet_balance: 0,
        created_courses: [],
        chat_notifications_sent: [],
        chat_notifications_received: [],
        profile: '',
        bought_courses: [],
        __v: 0
}
export const UserContext = createContext<userContextType>(initialUserContext);

interface UserContextProviderProps {
  children: ReactNode;
}

const UserContextProvider = ({ children }: UserContextProviderProps) => {
 
    const { isLoggedIn, user } = useContext(AuthContext);
    const { isLoading, isError, userProfile } = useUserProfile();
    const [updatedUser, setUpdatedUser] = useState<User>({});



//   const reducer = (state, action) => {
//     switch(action.type) {
//         case "UPDATE":
//             fetch()
//     }
//     if(isLoggedIn){
//         setUpdatedUser(userProfile);
//         localStorage.setItem('user', JSON.stringify(userProfile));
//     }
//   };

  return (
    <UserContext.Provider value={{ updatedUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;