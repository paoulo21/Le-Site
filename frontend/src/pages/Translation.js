import './Page.css';

function Translation() {
  return (
    <div className="page">
      <h1>Translation</h1>
      
        <div className="card">
        <h2>Translations I made</h2>
        <p>
          This is a list of some translations I have done:
        </p>
      </div>

      <div className="info-section">
        <h2>All Translations:</h2>
        <div className="tech-grid">
          <div className="tech-item">
            <h3>Stay Gold on Silence Suzuka</h3>
            <p><a href="https://x.com/yonedatomomizu/status/1960666757951316033" target="_blank" rel="noopener noreferrer">Original</a></p>
            <p><a href="https://x.com/PaouloGamer/status/1961492721228452114" target="_blank" rel="noopener noreferrer">Translation</a></p>
            <img src="http://localhost:8080/api/image/SteGoSuzu.png" alt="SteGoSuzu" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Translation;