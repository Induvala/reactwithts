import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './counterapp/Counter';
import TodoApp from './TodoApp/TodoApp';
import LoginForm from './formHandlingApp/LoginForm';

function App() {
  return (
    <div className="App">
     {/* <Counter/> */}
     {/* <TodoApp/> */}
     <LoginForm/>
    </div>
  );
}

export default App;
