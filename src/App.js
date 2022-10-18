
import './App.css';
import MountingCycle from './components/MountingCycle';
import MountingChild from './components/MountingChild';
import FocusInput from './components/FocusInput';
// import EffectRender from './components/EffectRender'
// import UseCounter from './components/UseCounter';
// import UseReducer from './components/UseReducer';
// import UseRef from './components/UseRef';
function App() {
  return (
    <div className="App">
      {/* <EffectRender></EffectRender>
      <UseCounter></UseCounter>
      <UseReducer></UseReducer>
      <UseRef></UseRef> */}
      <MountingCycle></MountingCycle>
      <MountingChild></MountingChild>
      <FocusInput></FocusInput>
    </div>

  );
}

export default App;
