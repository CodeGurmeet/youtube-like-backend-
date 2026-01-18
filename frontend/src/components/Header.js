import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';

export const Header = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo" onClick={() => navigate('/')}>
          <h1>🎬 VidHub</h1>
        </div>

        <nav className="navbar">
          {isAuthenticated ? (
            <div className="nav-links">
              <span className="user-name">{user?.fullName}</span>
              <img 
                src={user?.avatar} 
                alt="User Avatar" 
                className="user-avatar"
                onClick={() => navigate('/profile')}
              />
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </div>
          ) : (
            <div className="nav-links">
              <button onClick={() => navigate('/login')} className="login-btn">Login</button>
              <button onClick={() => navigate('/register')} className="register-btn">Register</button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};
