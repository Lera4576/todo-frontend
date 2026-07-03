import React, { useEffect } from 'react';

interface Todo {
  id: string;
  title: string;
  description?: string | null;
  status: 'todo' | 'progress' | 'done';
  isFavorite: boolean;
}

function App() {
  useEffect(() => {
    const fetchTodos = async (): Promise<void> => {
      try {
        const response = await fetch('/todos');
        if (!response.ok) {
          throw new Error(`Ошибка сервера: ${response.status}`);
        }
        const data: Todo[] = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Ошибка подключения к серверу:', error);
      }
    };
    
    fetchTodos();
  }, []);

  return <div></div>;
}

export default App;