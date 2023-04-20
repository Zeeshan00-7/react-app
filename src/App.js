import './App.css';
import {Logo} from './components/Logo/Logo'
import {Button} from './components/Button/Button'
import {Reactbenifits} from './components/Reactbenifits/Reactbenifits'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo/>
        <Reactbenifits/>
         <Button/>
       

       
      </header>
    </div>
  );
}

export default App;