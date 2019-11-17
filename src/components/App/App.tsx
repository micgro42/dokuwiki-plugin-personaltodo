import React from 'react';
import './App.css';
import AddProject from '../../containers/AddProject';
import AddTodo from '../../containers/AddTodo';
import Projects from '../../containers/Projects'
import Todos from '../../containers/Todos';

const App: React.FC = () => {
  return (
    <div className="App">
        <Todos />
        <AddTodo />
        <Projects />
        <AddProject />
    </div>
  );
};

export default App;
