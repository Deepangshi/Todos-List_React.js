import React, { useState,useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

// useEffect
  useEffect(()=> {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };


  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      {props.edit ? (
        <>
        <input className="todo-input edit me-2" type="text" placeholder="Update Todos" 
        value={input} name='text' onChange={handleChange}
        ref={inputRef} />
        <button className="todo-btn edit" onClick={handleSubmit}>Update</button>
        </>
      ) : (
        <> 
        <input className="todo-input me-2" type="text" placeholder="Add Todos" 
        value={input} name='text' onChange={handleChange}
        ref={inputRef} />
        <button className="todo-btn" type="submit">╋ Todo</button>
        </> 
      )}
    </form>
  );
}

export default TodoForm;