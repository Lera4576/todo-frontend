import React, { useState } from 'react';

interface TodoFormProps {
  onCreate: (title: string, description?: string) => Promise<void>;
}

export const TodoForm: React.FC<TodoFormProps> = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    setIsSubmitting(true);
    try {
      await onCreate(title.trim(), description.trim() || undefined);
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Ошибка:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={isSubmitting}
      />
      <input
        type="text"
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        disabled={isSubmitting}
      />
      <button type="submit" disabled={isSubmitting || !title.trim()}>
         Add
    </button>
    </form>
  );
};