import { FC, useState } from 'react';
import { Todo } from '../../pages/Todos';
import Edit from '../svgs/Edit';
import Save from '../svgs/Save';
import Trash from '../svgs/Trash';
import { Button, Group, Input, Title, Wrapper } from './styles';

type Props = {
  todo: Todo;
  onDelete: (id: number) => void;
  onEdit: (id: number, newValue: string) => void;
};

const TodoItem: FC<Props> = ({ todo, onDelete, onEdit }) => {
  const [newTodo, setNewTodo] = useState<string>(todo.content);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleEditTodo = () => {
    if (!newTodo) return;
    onEdit(todo.id, newTodo);
    setIsEdit(false);
  };

  return (
    <Wrapper >
      {
        isEdit ?
          <Input value={newTodo} onChange={(event) => setNewTodo(event.target.value)} type='text' /> :
          <Title>{todo.content}</Title>
      }

      <Group>
        {
          isEdit ?
            <Button
              onClick={handleEditTodo}
              type='button'
              fill='#fff'
              borderCl='#8fac0e'
            >
              <Save />
            </Button> :
            <Button
              onClick={() => setIsEdit(true)}
              type='button'
              fill='#fff'
              borderCl='#157fc6d9'
            >
              <Edit />
            </Button>
        }
        <Button
          onClick={() => onDelete(todo.id)}
          type='button'
          fill='#fff'
          borderCl='#ff0000'
        >
          <Trash />
        </Button>
      </Group>
    </Wrapper>
  );
};

export default TodoItem;