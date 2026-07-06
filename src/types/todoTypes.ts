export interface Todo {
  id: string;
  title: string;
  description?: string | null;
  status: 'todo' | 'progress' | 'done';
  isFavorite: boolean;
}