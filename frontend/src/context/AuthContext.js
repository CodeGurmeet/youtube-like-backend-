import React, { createContext, useState, useContext, useEffect } from 'react';
import { userService } from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      setUser(JSON.parse(userData));
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const register = async (formData) => {
    try {
      console.log("Starting registration...");
      const response = await userService.register(formData);
      console.log("Registration response:", response);
      const { createdUser, AccessToken, RefreshToken } = response.data.data;
      console.log("Extracted data:", { createdUser, AccessToken, RefreshToken });
      localStorage.setItem('accessToken', AccessToken);
      localStorage.setItem('refreshToken', RefreshToken);
      localStorage.setItem('user', JSON.stringify(createdUser));
      setUser(createdUser);
      setIsAuthenticated(true);
      return response.data;
    } catch (error) {
      console.error("Registration error:", error);
      throw error.response?.data || error;
    }
  };

  const login = async (credentials) => {
    try {
      const response = await userService.login(credentials);
      const { loggedInUser, AccessToken, RefreshToken } = response.data.data;
      localStorage.setItem('accessToken', AccessToken);
      localStorage.setItem('refreshToken', RefreshToken);
      localStorage.setItem('user', JSON.stringify(loggedInUser));
      setUser(loggedInUser);
      setIsAuthenticated(true);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  };

  const logout = async () => {
    try {
      await userService.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      isAuthenticated,
      register,
      login,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
