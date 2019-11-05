import React from 'react';
import Todo from './Todo';


function TodoList({toDoList,dispatch}) { 
  return (
    <div>
      {toDoList.map( elem => (
        <Todo 
          todoItem={elem}
          dispatch={dispatch}
          key={elem.id} 
        />
      ))}
    </div>
  );
    
}
  
  export default TodoList;

