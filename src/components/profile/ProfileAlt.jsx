import React from 'react';
import styled from 'styled-components';

// icons
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";

export default function ProfileHeader() {
  return (
    <ProfileHeaderCSS>
      <div className="profile-content">
        <div className="profile-image">
          <img src="/api/placeholder/120/120" alt="John Doe" />
        </div>
        
        <div className="profile-info">
          <h1 className="name">John Doe</h1>
          <h2 className="title">Full Stack Developer</h2>
          <p className="tagline">Building responsive, accessible web applications with modern technologies</p>
        </div>
        
        <div className="profile-actions">
          <div className="social-links">
            <a href="https://linkedin.com/in/john-doe" aria-label="LinkedIn Profile" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="https://github.com/jdoe" aria-label="GitHub Profile" className="social-icon">
              <FaGithub />
            </a>
            <a href="mailto:john@example.com" aria-label="Email Me" className="social-icon">
              <FaEnvelope />
            </a>
          </div>
          <button className="contact-button">Contact Me</button>
        </div>
      </div>
    </ProfileHeaderCSS>
  );
}

const ProfileHeaderCSS = styled.header`
  box-sizing: border-box;
  width: 100%;
  padding: 1.5rem 2rem;
  background: linear-gradient(135deg, #2b5876 0%, #4e4376 100%);
  color: white;
  border-bottom: 3px solid #4e4376;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  .profile-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 2rem;
    align-items: center;
  }
  
  .profile-image {
    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      border: 3px solid #fff;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
      object-fit: cover;
    }
  }
  
  .profile-info {
    .name {
      font-size: 2.2rem;
      font-weight: 700;
      margin: 0 0 0.3rem 0;
      font-family: 'Poppins', sans-serif;
    }
    
    .title {
      font-size: 1.3rem;
      font-weight: 400;
      margin: 0 0 0.8rem 0;
      color: #e0e0e0;
    }
    
    .tagline {
      font-size: 1rem;
      margin: 0;
      max-width: 600px;
      color: #e0e0e0;
    }
  }
  
  .profile-actions {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
    
    .social-links {
      display: flex;
      gap: 1rem;
      
      .social-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.1);
        color: white;
        transition: all 0.2s ease;
        
        &:hover {
          background-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }
        
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
    
    .contact-button {
      padding: 0.6rem 1.2rem;
      background-color: #61dafb;
      color: #2b5876;
      border: none;
      border-radius: 4px;
      font-weight: 600;
      font-size: 0.9rem;
      cursor: pointer;
      transition: all 0.2s ease;
      
      &:hover {
        background-color: #4dcfff;
        transform: translateY(-2px);
      }
    }
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
    
    .profile-content {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto auto;
      grid-gap: 1rem;
      text-align: center;
    }
    
    .profile-image {
      justify-self: center;
    }
    
    .profile-info {
      .name {
        font-size: 1.8rem;
      }
      
      .title {
        font-size: 1.1rem;
      }
    }
    
    .profile-actions {
      align-items: center;
      
      .social-links {
        margin-bottom: 0.5rem;
      }
    }
  }
`;