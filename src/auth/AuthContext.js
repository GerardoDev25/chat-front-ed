import { createContext, useState, useCallback } from 'react';
import { fetchSinToken } from '../helpers/fetch';
export const AuthContext = createContext();

const initialState = {
  uid: null,
  checking: true,
  logged: false,
  name: null,
  email: null,
};

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);

  const login = async (email, password) => {
    const resp = await fetchSinToken('login', { email, password }, 'POST');
    console.log(resp);
  };

  const register = (name, email, password) => {};

  const verifcaToken = useCallback(() => {}, []);

  const logout = () => {};

  return (
    <AuthContext.Provider
      //
      value={{ login, register, verifcaToken, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
