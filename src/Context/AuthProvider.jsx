import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      const userData = await AsyncStorage.getItem('user');
      const rememberMeData = await AsyncStorage.getItem('rememberMe');
      if (userData) {
        setUser(JSON.parse(userData));
      }
      if (rememberMeData) {
        setRememberMe(JSON.parse(rememberMeData));
      }
    };

    loadUser();
  }, []);

  const login = async (userData, remember) => {
    setUser(userData);
    setRememberMe(remember);
    await AsyncStorage.setItem('user', JSON.stringify(userData));
    await AsyncStorage.setItem('rememberMe', JSON.stringify(remember));
    if (remember) {
      await AsyncStorage.setItem(
        'credentials',
        JSON.stringify({email: userData.Email, password: userData.password}),
      );
    } else {
      await AsyncStorage.removeItem('credentials');
    }
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('user');
    await AsyncStorage.removeItem('rememberMe');
    await AsyncStorage.removeItem('credentials');
  };

  return (
    <AuthContext.Provider value={{user, rememberMe, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
