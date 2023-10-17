import React, { useState } from 'react';

export default function TodoForm({ todos, setTodos }) {
  const [todo, setTodo] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!todo) return;
    const newTodo = {
      task: todo,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setTodo('');
  };
  return (
    <form className="todo-form">
      <input
        type="text"
        name="todo"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        placeholder="Enter Task"
      />
      <button onClick={handleAdd}>Add</button>
    </form>
  );
}
