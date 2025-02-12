import {ITodo} from '../types/data'
import './TodoList.css';

interface ITodoItem extends ITodo {
    removeTodos: (id: number) => void
    toggleTodos: (id: number) => void
}

const TodoItem: React.FC<ITodoItem> = (props) => {
    const {id, title, complete, removeTodos, toggleTodos} = props;

    return <div className='todoItem'>
        <input className='todoList' type='checkbox' checked={complete} onChange={() => toggleTodos(id)} />
        <div className='title'>{title}</div>
        <button className='button__remove' onClick={() => removeTodos(id)}>close</button>
    </div>
}

export {TodoItem}