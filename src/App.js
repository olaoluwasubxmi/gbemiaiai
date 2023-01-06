import './App.css';
import loading from './loading.gif'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ marginTop: '-100px' }}>
        <img src={loading} className="App-logo" alt="logo" />

        </div>
        <div style={{ marginTop: '-80px' }}>
        <p className="gradient-text">Gbemi-ai Coming Soon</p>

  <p className="gradient-text">Global</p>
  <p className="gradient-text">Brain</p>
  <p className="gradient-text">Efficiency</p>
  <p className="gradient-text">Machine</p>
  <p className="gradient-text">Intelligence</p>
</div>
      </header>
      <footer style={{ backgroundColor: 'black' }}>
  <a
    className="App-link"
    target="_blank"
    rel="noopener noreferrer"
    style={{ fontSize: '17px', color: 'white' }}
  >
     By Olaoluwasubomi
  </a>
</footer>
    </div>

    
  );
}

export default App;
