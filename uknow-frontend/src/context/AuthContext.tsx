import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import LoginData from '../interfaces/login.interface';
import { useLoginUser } from '../services/useMutation-LoginUser';
import { User } from '../interfaces/user.interface';

export interface AuthContextType {
  isLoggedIn: boolean;
  loginData: LoginData;
  setLoginData: Dispatch<SetStateAction<LoginData>>;
  login: () => void;
  logout: () => void;
  user: User  ;
}

const initialAuthContext: AuthContextType = {
  isLoggedIn: false,
  loginData: {
    email: '',
    password: '',
  },
  setLoginData: () => {},
  login: () => {},
  logout: () => {},
  user: {
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
}
export const AuthContext = createContext<AuthContextType>(initialAuthContext);

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: '',
  });
  
  const [user, setUser] = useState<User>({
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
    __v: 0,
  });

  const loginMutation = useLoginUser();
  const login = async () => {
    try {
      const { data } = await loginMutation.mutateAsync(loginData);
      
      const token = data.token; 
      const userData = data.user;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(userData));
      setIsLoggedIn(true);
      setUser(userData);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user'); 
    setLoginData({ email: '', password: '' });
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, loginData, setLoginData, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;