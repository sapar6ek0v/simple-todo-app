import { FC, FormEvent, useEffect, useState } from 'react';
import TodoItem from '../../components/TodoItem';
import { Button, Group, Input, Stack, Wrapper, List, NoTodosTitle } from './styles';

export type Todo = {
  id: number;
  content: string;
  createdAt: Date;
};

const Todos: FC = () => {
  const [todos, setTodos] = useState<Todo[]>(JSON.parse(localStorage.getItem('todos') as string) || []);
  const [todo, setTodo] = useState<string>('');

  const saveToLocalStorage = (key: string, todos: Todo[]) => {
    localStorage.setItem(key, JSON.stringify(todos));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!todo) return;

    setTodos([
      ...todos,
      {
        id: Date.now() + Math.random() * 1000,
        content: todo,
        createdAt: new Date(),
      }
    ]);
    setTodo('');
  };

  useEffect(() => {
    saveToLocalStorage('todos', todos)
  }, [todos]);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todos') as string));
  }, []);

  const handleDeleteTodo = (id: number) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
    saveToLocalStorage('todos', filteredTodos);
  };

  const handleEditTodo = (id: number, newValue: string) => {
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) return;
    const editedTodo = { ...todo, content: newValue };
    const filteredTodos = todos.filter((todo) => todo.id !== editedTodo.id);
    const newTodoList = [editedTodo, ...filteredTodos];
    setTodos(newTodoList);
    saveToLocalStorage('todos', newTodoList);
  };

  return (
    <Wrapper>
      <Stack>
        <form onSubmit={handleSubmit}>
          <Group>
            <Input
              value={todo}
              onChange={(event) => setTodo(event.target.value)}
              type='text'
              placeholder='Write todo...'
            />
            <Button type='submit' disabled={!todo}>Create</Button>
          </Group>
        </form>

        <List>
          {
            todos.length ?
              todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onDelete={handleDeleteTodo} onEdit={handleEditTodo} />
              ))
              : <NoTodosTitle>You don`t have any todos!</NoTodosTitle>
          }
        </List>
      </Stack>
    </Wrapper>
  );
};

export default Todos;