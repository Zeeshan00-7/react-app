import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>Benifits of using React ...</h1>
          <ol type='1'>
          <li> Component based architecture</li>
          <li> Virtual DOM for efficient updates</li>
          <li> Rich ecosystem and community</li>
          <li> Cross-Platform development</li>
          <li> Strong community support</li>
          <button>Get Started ..</button>
          </ol>

        </p>

      </header>
    </div>
  );
}

export default App;