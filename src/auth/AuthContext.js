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
    if (resp.ok) {
      localStorage.setItem('token', resp.token);
      const { usuario } = resp;
      setAuth({ uid: usuario.uid, checking: true, logged: true, name: usuario.nombre, email: usuario.email });
      console.log('auth');
    }

    return resp.ok;
  };

  const register = async (name, email, password) => {
    const resp = await fetchSinToken('login/new', { email, password, nombre: name }, 'POST');
    if (resp.ok) {
      localStorage.setItem('token', resp.token);
      const { usuario } = resp;
      setAuth({ uid: usuario.uid, checking: true, logged: true, name: usuario.nombre, email: usuario.email });
      console.log('auth new');
    }

    return resp.ok;
  };

  const verifcaToken = useCallback(() => {}, []);

  const logout = () => {};

  return (
    <AuthContext.Provider
      //
      value={{ auth, login, register, verifcaToken, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
