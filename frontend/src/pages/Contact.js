import React from 'react';
import './Page.css';

function Contact() {
  return (
    <div className="page">
      <h1>Contact</h1>
      
      <div className="card">
        <h2>Get in Touch</h2>
        <p>This is a placeholder contact page. You can add your own content here!</p>
      </div>

      <div className="info-section">
        <h2>Navigation Demo</h2>
        <p>
          Notice how switching between pages doesn't cause a full page reload. 
          The navigation is handled entirely on the client-side using React Router,
          making the experience smooth and fast.
        </p>
        <p>
          You can verify this by:
        </p>
        <ul>
          <li>Opening the browser's developer console (F12)</li>
          <li>Going to the Network tab</li>
          <li>Clicking on different menu items</li>
          <li>Observing that no new page loads occur</li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
