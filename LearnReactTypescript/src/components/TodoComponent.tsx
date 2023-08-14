import { Todo } from '../App';

type TodoProps = Todo & {
  toggleDone: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const TodoComponent = ({
  id,
  todo,
  isDone,
  toggleDone,
  deleteTodo,
}: TodoProps) => {
  return (
    <li>
      <p className={isDone ? 'done' : ''} onClick={() => toggleDone(id)}>
        {todo}
      </p>
      <button onClick={() => deleteTodo(id)}>delete</button>
    </li>
  );
};

export default TodoComponent;
