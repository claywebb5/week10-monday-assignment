// <IMPORTS> ------------------------------------------------------------------
import './App.css';
import Header from '../Header/Header';
import Inputs from '../Inputs-buttons/Inputs';

// <IMPORTS> ------------------------------------------------------------------

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* This will display "To Do List" on the DOM */}
        <Header />
        {/* This will display the inputs and button on the DOM */}
        {/* <Inputs /> */}
      </header>

    </div>
  );
}

export default App;
