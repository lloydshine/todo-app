import React, { useState, useEffect } from 'react';
import { TodoList, TodoForm } from '../../components';

export default function Todos() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  return (
    <section className="todos">
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </section>
  );
}
