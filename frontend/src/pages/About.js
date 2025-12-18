import React from 'react';
import './Page.css';

function About() {
  return (
    <div className="page">
      <h1>About</h1>
      
      <div className="card">
        <h2>About Le Site</h2>
        <p>
          This is a personal project where I experiment with different web technologies
          and build whatever comes to mind.
        </p>
      </div>

      <div className="info-section">
        <h2>Technologies Used</h2>
        <div className="tech-grid">
          <div className="tech-item">
            <h3>React</h3>
            <p>Modern JavaScript library for building user interfaces</p>
          </div>
          <div className="tech-item">
            <h3>Spring Boot</h3>
            <p>Java framework for building robust backend applications</p>
          </div>
          <div className="tech-item">
            <h3>React Router</h3>
            <p>Declarative routing for React applications</p>
          </div>
          <div className="tech-item">
            <h3>REST API</h3>
            <p>Communication between frontend and backend</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
