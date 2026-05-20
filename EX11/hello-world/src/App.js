import logo from './logo.svg';
import './App.css';
import MultiButton from './cgu_multiButton'
import HelloCGU from './cgu_hello'

function App() {
  return(
    <div className="App">
      <div>
        { HelloCGU() }
      </div>
      <div>
        { CGUGataGrid() }
      </div>
    </div>
  );
}

//function App() {
//  return (
//    <div className="App">
//      <h1 style = { styleArgument } onClick= {changeText}> hello CGU!!
//      </h1>    
//    </div>
//  );
//}

export default App;
