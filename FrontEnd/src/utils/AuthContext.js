import React, { createContext, useState } from "react";

export const AuthContext = createContext("");

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setusername] = useState("");

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, username, setusername }}
    >
      {children}
    </AuthContext.Provider>
  );
};
