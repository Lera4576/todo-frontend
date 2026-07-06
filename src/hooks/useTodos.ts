import { useState, useEffect, useCallback } from 'react';
import { Todo } from '../types';
import { getTodoList, addTodo } from '../api';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadTodos = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await getTodoList();
      setTodos(data);
    } catch (err) {
      setError('Ошибка загрузки задач');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const createTodo = useCallback(async (title: string, description?: string) => {
    try {
      const newTodo = await addTodo(title, description);
      setTodos((prev) => [...prev, newTodo]);
    } catch (err) {
      console.error('Ошибка создания задачи:', err);
      throw err;
    }
  }, []);

  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  // ⚠️ ВАЖНО: здесь должен быть return
  return { todos, isLoading, error, createTodo, refetch: loadTodos };
};