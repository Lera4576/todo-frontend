import React from 'react';
import { Todo as TodoType } from '../../types';

interface TodoProps {
  todo: TodoType;
}

export const Todo: React.FC<TodoProps> = ({ todo }) => {
  return (
    <li>
      <div>
        <strong>{todo.title}</strong>
        {todo.description && <p>{todo.description}</p>}
      </div>
      <div>
        <span>Статус: {todo.status}</span>
      </div>
    </li>
  );
};