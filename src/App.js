import React from 'react';
import './App.css';
import Hello from './Components/Intro/hello';
import Todo from './Components/Todo/Todo';
import Bottom from './Components/Nav/Bottom'
import Top from './Components/Nav/Top'


function App() {
  return (
    <div className="App">
      <Top />
      <Hello />
      <Todo />
      <Bottom />

    </div>
  );
}

export default App;
