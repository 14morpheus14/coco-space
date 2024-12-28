import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (userData) => {
    setLoading(true);
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    setLoading(false);
  };
  const logout = () => {
    setLoading(true);
    setUser(null);
    localStorage.removeItem("user");
    setLoading(false);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
