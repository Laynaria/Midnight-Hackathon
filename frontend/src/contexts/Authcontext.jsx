import { createContext, useState, useMemo } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);

  const login = useMemo(
    () => () => {
      setIsLogin(true);
    },
    []
  );

  const logout = useMemo(
    () => () => {
      setIsLogin(false);
      sessionStorage.removeItem("token");
    },
    []
  );

  const value = useMemo(
    () => ({ login, logout, isLogin }),
    [login, logout, isLogin]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
