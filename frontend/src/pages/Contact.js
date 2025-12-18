import React from 'react';
import './Page.css';

function Contact() {
  return (
    <div className="page">
      <h1>Contact</h1>
      
      <div className="card">
        <h2>Email</h2>
        <p>paullouis.gomis.etu@univ-lille.fr</p>
      </div>

      <div className="card">
        <h2>Social Media</h2>
        <p>Twitter: <a href="https://twitter.com/PaouloGamer" target="_blank" rel="noopener noreferrer">@PaouloGamer</a></p>
        <p>GitHub: <a href="https://github.com/paoulo21" target="_blank" rel="noopener noreferrer">paoulo21</a></p>
        <p>Discord: paoulo.</p>
    </div>
    </div>
  );
}

export default Contact;
