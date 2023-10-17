import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

export default function Todo({ todo, handleRemove, toggleTodo }) {
  const [done, setDone] = useState(todo.isDone);

  const handleTodo = () => {
    setDone(!done);
    toggleTodo(todo);
  };

  return (
    <div className={done ? 'todo done' : 'todo'}>
      <div className="task-info">
        <input type="checkbox" checked={done} onChange={handleTodo} />
        <p>{todo.task}</p>
      </div>
      <FaTrash color="red" size={18} onClick={() => handleRemove(todo)} />
    </div>
  );
}
