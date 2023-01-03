import { createContext, ReactNode, useState } from 'react';

type AuthContextType = {
  user: string;
  setAuth: (token: string) => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: '',
  setAuth: () => { },
});

type Props = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const getDataFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('auth') as string)
  };

  const setDataToLocalStorage = (token: string) => {
    localStorage.setItem('auth', JSON.stringify(token));
    return true;
  };

  const auth = getDataFromLocalStorage();
  const [user, setUser] = useState(auth);

  const setAuth = (token: string) => {
    setUser(token);
    setDataToLocalStorage(token);
  };

  return <AuthContext.Provider value={{ user, setAuth }}>{children}</AuthContext.Provider>;
};

