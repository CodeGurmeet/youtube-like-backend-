import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to VidHub</h1>
          <p>Share your videos with the world. Create, upload, and discover amazing content.</p>
          <div className="hero-buttons">
            <button onClick={() => navigate('/register')} className="btn-primary">
              Get Started
            </button>
            <button onClick={() => navigate('/login')} className="btn-secondary">
              Sign In
            </button>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2>Platform Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📹</div>
            <h3>Upload Videos</h3>
            <p>Share your content with high quality video uploads</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3>Build Community</h3>
            <p>Subscribe to channels and grow your audience</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">❤️</div>
            <h3>Like & Engage</h3>
            <p>Interact with content through likes and comments</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Analytics</h3>
            <p>Track your video performance and audience insights</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Customize Profile</h3>
            <p>Create a unique channel with cover and profile images</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure</h3>
            <p>Your content and data are protected with JWT authentication</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Start?</h2>
        <p>Join thousands of content creators</p>
        <button onClick={() => navigate('/register')} className="btn-large">
          Create Your Channel Now
        </button>
      </section>
    </div>
  );
};
