import React from 'react';
import { useTodos } from '../../hooks';
import { Todo } from '../../components/Todo';
import { TodoForm } from '../../components/TodoForm';

export const Main: React.FC = () => {
  const { todos, isLoading, error, createTodo } = useTodos();

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div>
      <TodoForm onCreate={createTodo} />
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};