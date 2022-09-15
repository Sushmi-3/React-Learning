import './App.css';
import StateCounter from './components/StateCounter';
import StateFunc from './components/StateFunc';
import SetStateWPrev from './components/SetStateWPrev';
function App() {
  return (
    <div className="App">
      <StateCounter></StateCounter>
      <StateFunc></StateFunc>
      <SetStateWPrev/>
    </div>
  );
}

export default App;
