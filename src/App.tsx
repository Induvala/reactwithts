import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './counterapp/Counter';
import TodoApp from './TodoApp/TodoApp';
import LoginForm from './formHandlingApp/LoginForm';
import Posts from './Posts/Posts';

function App() {
  return (
    <div className="App">
     {/* <Counter/> */}
     {/* <TodoApp/> */}
     {/* <LoginForm/> */}
     <Posts/>
    </div>
  );
}

export default App;
