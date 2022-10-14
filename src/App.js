
import './App.css';
import EffectRender from './components/EffectRender'
import UseCounter from './components/UseCounter';
import UseReducer from './components/UseReducer';
import UseRef from './components/UseRef';
function App() {
  return (
    <div className="App">
      <EffectRender></EffectRender>
      <UseCounter></UseCounter>
      <UseReducer></UseReducer>
      <UseRef></UseRef>
    </div>

  );
}

export default App;
