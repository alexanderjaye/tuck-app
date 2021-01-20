import React, { createContext, useState } from 'react'

export const AuthContext = createContext<any>(null);

const AuthContextProvider = (props:any) => {
  // states
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userID, setUserId] = useState('');

  const getAuthStatus = (): boolean => {
    return isLoggedIn;
  }
  
  const changeAuthStatus = (auth: boolean): void => {
    setIsLoggedIn(auth);
  }

  const getUserID = (): string => {
    return userID;
  }

  const changeUserID = (uid: string): void => {
    setUserId(uid);
  }

  return (
    <AuthContext.Provider 
      value={{ getAuthStatus, changeAuthStatus, getUserID, changeUserID }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;