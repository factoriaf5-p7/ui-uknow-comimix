import { createContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from 'react';
import LoginData from '../interfaces/login.interface';
import { useLoginUser } from '../hooks/useMutation-LoginUser';

interface AuthContextType {
  isLoggedIn: boolean;
  loginData: LoginData;
  setLoginData: Dispatch<SetStateAction<LoginData>>;
  login: () => void;
  logout: () => void;
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
};

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

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const loginMutation = useLoginUser();
  const login = async () => {
    try {
      const { data } = await loginMutation.mutateAsync(loginData);
      const token = data; 
      localStorage.setItem('token', token);
      setIsLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  };


  const logout = () => {
    localStorage.removeItem('token');
    setLoginData({ email: '', password: '' });
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, loginData, setLoginData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
