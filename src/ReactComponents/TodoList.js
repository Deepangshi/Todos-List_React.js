import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
      if (!todo.text || /^\s*$/.test(todo.text)) {
          return;
      }

   const newTodos = [todo, ...todos]

   setTodos(newTodos);
  };

// updatedTodo
  const updatedTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
    };
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
    );
  };

// removeTodo
   const removeTodo = id => {
       const removeArr = [...todos].filter(todo => todo.id !== id);

       setTodos(removeArr);
   };


// completeTodo
   const completeTodo = id => {
      let updatedTodos = todos.map(todo => {
          if (todo.id === id) {
              todo.isComplete = !todo.isComplete;
          }
          return todo;
      });
      setTodos(updatedTodos);
  };

  return (
    <>
        <h1>What's your Todo list today? ☺ </h1>
        <TodoForm onSubmit={addTodo} />
        <Todo todos={todos} completeTodo={completeTodo} 
        removeTodo={removeTodo} updatedTodo={updatedTodo} />
    </>
  );
}
 
export default TodoList;