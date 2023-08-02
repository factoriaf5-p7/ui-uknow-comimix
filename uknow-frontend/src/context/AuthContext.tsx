import { createContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from 'react';
import LoginData from '../interfaces/login.interface';
import { useLoginUser } from '../services/useMutation-LoginUser';
import { User } from '../interfaces/user.interface';

interface AuthContextType {
  isLoggedIn: boolean;
  loginData: LoginData;
  setLoginData: Dispatch<SetStateAction<LoginData>>;
  login: () => void;
  logout: () => void;
  user: User | null;
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
  user: null,
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
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    if (token && storedUser !== null) {
      setIsLoggedIn(true);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const loginMutation = useLoginUser();
  const login = async () => {
    try {
      const { data } = await loginMutation.mutateAsync(loginData);
      const token = data.token; 
      const user = data.user
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      setIsLoggedIn(true);
      setUser(user)
      return user
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
