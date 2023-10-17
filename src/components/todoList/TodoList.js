import React from 'react';
import { Todo } from '../';

export default function TodoList({ todos, setTodos }) {
  const handleRemove = (toRemoved) => {
    setTodos(todos.filter((todo) => todo.task !== toRemoved.task));
  };
  const toggleTodo = (toToggle) => {
    const updatedTodos = todos.map((todo) =>
      todo.task === toToggle.task ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(updatedTodos);
  };
  return (
    <div className="todo-list">
      {todos.map((todo, i) => {
        return (
          <Todo
            key={Math.random() * 1000}
            todo={todo}
            handleRemove={handleRemove}
            toggleTodo={toggleTodo}
          />
        );
      })}
    </div>
  );
}
