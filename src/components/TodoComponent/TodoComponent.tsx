import { ITodo } from "../../models/ITodo";

interface TodoProps {
    item : ITodo
}

export const TodoComponent = ({item}: TodoProps) => {
    return (
        <div className="border-2 border-yellow-400 rounded-lg mb-0.5 px-1.5"> 
            <p className={item.completed ? 'font-semibold' : 'font-normal'}>  {item.title}</p>
        </div>
    );
}