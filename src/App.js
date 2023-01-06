import logo from './logo.svg';
import './App.css';
import loading from './loading.gif'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={loading} className="App-logo" alt="logo" />
        <div style={{ marginTop: '150px' }}>
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
</div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
