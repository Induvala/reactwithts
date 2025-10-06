import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './counterapp/Counter';
import TodoApp from './TodoApp/TodoApp';

function App() {
  return (
    <div className="App">
     {/* <Counter/> */}
     <TodoApp/>
    </div>
  );
}

export default App;
