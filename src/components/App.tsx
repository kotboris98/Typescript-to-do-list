import { useState, useEffect, useRef } from "react";
import {TodoList} from "./TodoList";
import {ITodo} from "../types/data";
import { title } from "process";

const App: React.FC = () => {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<ITodo[]>([]);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)  
    }

    const addTodos = () => {
        if (value) {
        setTodos([...todos, {
            id: Date.now(),
            title: value,
            complete: false,
        }])
        setValue('')
    }}

    const removeTodos = (id: number): void => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const toggleTodos = (id: number): void => {
        setTodos(todos.map(todo => {
            if (todo.id !== id) return todo;
            return  {
                ...todo,
                complete: !todo.complete
            }
        }))
    }

    return <div>
        <div>
            <input value={value} onChange={handleChange}/>
            <button onClick={addTodos}>Add</button>
    </div>
    <TodoList items={todos} removeTodos={removeTodos} toggleTodos={toggleTodos} />
    </div>
}

export { App } 