import React, { useState, useEffect } from 'react';
import './Page.css';

function Home() {
  const [backendMessage, setBackendMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/api/hello')
      .then(response => response.json())
      .then(data => {
        setBackendMessage(data.message);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching from backend:', error);
        setBackendMessage('Backend not available');
        setLoading(false);
      });
  }, []);

  return (
    <div className="page">
      <h1>Welcome to Le Site</h1>
      <p>Un site sur le quel je fais un peu n'importe quoi</p>
      
      <div className="card">
        <h2>Frontend & Backend Connection</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <p className="backend-message">{backendMessage}</p>
        )}
      </div>

      <div className="info-section">
        <h2>About This Project</h2>
        <p>This is a full-stack web application built with:</p>
        <ul>
          <li><strong>Frontend:</strong> React with React Router for navigation</li>
          <li><strong>Backend:</strong> Spring Boot with REST API</li>
          <li><strong>Navigation:</strong> Client-side routing (no page reloads)</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
