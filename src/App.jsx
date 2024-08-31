import React from 'react';
import Title from './components/atoms/Title';
import InputWithAddButton from './components/molecules/InputWithAddButton';
import TaskList from './components/organisms/TaskList';

function App() {
  return (
    <div className="todo-app">
      <Title>LISTA DE TAREAS DE ELENIO</Title>
      <InputWithAddButton />
      <TaskList />
    </div>
  );
}

export default App;
