import React from 'react';
import { useAuth } from '../context/AuthContext';
import '../styles/Dashboard.css';

export const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard-container">
      <div className="welcome-section">
        <img src={user?.coverImage || 'https://via.placeholder.com/1200x300'} alt="Cover" className="cover-image" />
        
        <div className="user-info">
          <img src={user?.avatar} alt="User Avatar" className="profile-avatar" />
          <div className="user-details">
            <h1>{user?.fullName}</h1>
            <p>@{user?.username}</p>
            <p>{user?.email}</p>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <section className="content-section">
          <h2>🎥 My Uploads</h2>
          <div className="uploads-grid">
            <div className="empty-state">
              <p>No videos uploaded yet. Start uploading your first video!</p>
              <button className="btn-primary">Upload Video</button>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>📊 Statistics</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Total Views</h3>
              <p className="stat-number">0</p>
            </div>
            <div className="stat-card">
              <h3>Total Videos</h3>
              <p className="stat-number">0</p>
            </div>
            <div className="stat-card">
              <h3>Subscribers</h3>
              <p className="stat-number">0</p>
            </div>
            <div className="stat-card">
              <h3>Total Likes</h3>
              <p className="stat-number">0</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>✅ Subscriptions</h2>
          <div className="subscriptions-grid">
            <div className="empty-state">
              <p>You haven't subscribed to any channels yet.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
