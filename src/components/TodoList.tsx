import { TodoItem } from "./TodoItem"

import {ITodo} from "../types/data"

interface ITodoListProps {
    items: ITodo[];
    toggleTodos: (id: number) => void;
    removeTodos: (id: number) => void; 
}

const TodoList: React.FC<ITodoListProps> = (props) => {
    const {items, toggleTodos, removeTodos} = props; 
    return <div>
        {
            props.items.map(todo => 
                (<TodoItem 
                    key={todo.id} 
                    toggleTodos={toggleTodos} 
                    removeTodos={removeTodos}
                    {...todo} />))
        }
    </div>
}

export {
    TodoList
}