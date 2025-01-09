import { useEffect, useState } from "react";
import { ITodo } from "../../models/ITodo";
import { TodoComponent } from "../TodoComponent/TodoComponent";
import { IDummyResponse } from "../../models/IDummyResponse";
import { GetAllTodos } from "../../services/api_service";

export const TodoComponents = () => {
    const [todos, settodos] = useState<ITodo[]>([]);

    useEffect(() => {
        GetAllTodos()
        .then(({todos}:IDummyResponse) => settodos(todos))
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