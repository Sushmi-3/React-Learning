import './App.css';
import StateCounter from './components/StateCounter';
import StateFunc from './components/StateFunc';
import StateWObject from './components/StateWObject';
import SetStateWPrev from './components/SetStateWPrev';
import StateWArray from './components/StateWArray';
function App() {
  return (
    <div className="App">
      <StateCounter></StateCounter>
      <StateFunc></StateFunc>
      <SetStateWPrev/>
      <StateWObject></StateWObject>
      <StateWArray></StateWArray>
    </div>
  );
}

export default App;
