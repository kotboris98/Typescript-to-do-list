import {ITodo} from '../types/data'

interface ITodoItem extends ITodo {
    removeTodos: (id: number) => void
    toggleTodos: (id: number) => void
}

const TodoItem: React.FC<ITodoItem> = (props) => {
    const {id, title, complete, removeTodos, toggleTodos} = props;

    return <div>
        <input type='checkbox' checked={complete} onChange={() => toggleTodos(id)} />
        {title}
        <button onClick={() => removeTodos(id)}>x</button>
    </div>
}

export {TodoItem}