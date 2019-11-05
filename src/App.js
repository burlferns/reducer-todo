import React, {useReducer} from 'react';
import './App.css';

import {initialState,appReducer} from './reducers/reducer';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);


  return (
    <div className="App">
      <h2>TODO App with state from React useReducer</h2>
      <TodoList 
        toDoList={state} 
        dispatch={dispatch}
      />
      <TodoForm 
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;
