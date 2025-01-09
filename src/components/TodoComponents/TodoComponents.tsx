import { useEffect, useState } from "react";
import { ITodo } from "../../models/ITodo";
import { TodoComponent } from "../TodoComponent/TodoComponent";

export const TodoComponents = () => {
    const [todos, settodos] = useState<ITodo[]>([]);

    useEffect(() => {
         fetch(import.meta.env.VITE_API_URL)
        .then(response => response.json())
        .then((todoarray: ITodo[]) => settodos(todoarray))
        }        
    ,[]);

    return (
        <div className="todos_container">
            {
            todos.map((arritem, index) => <TodoComponent key={index} item={arritem}/>)
            }
        </div>
    );
}