import './App.css';

import Todolist from "./components/Todolist"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo list</h2>
        <Todolist />
      </header>
    </div>
  );
}

export default App;
