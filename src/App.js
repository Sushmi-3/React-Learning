
import './App.css';
import Functional from './components/Functional';
import Hello from './components/Hello';
import State from './components/State';
import Counter from './components/Counter';
import EventHanFunc from './components/EventHanFunc';
import EventHandling from './components/EventHandling';
function App() {
  return (
    <div className="App">
      <Functional name="Janet"></Functional>
      <Hello></Hello>
      <State></State>
      <Counter></Counter>
      <EventHanFunc></EventHanFunc>
      <EventHandling></EventHandling>
    </div>
  );
}

export default App;
