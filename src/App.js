import './App.css';
import Counter from './component/counter/counter';

function App() {

  return (
    <div className="App">
      <Counter incr={1}/>
      <Counter incr={5}/>
    </div>
  );
}

export default App;
