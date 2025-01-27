import { useCallback, useEffect, useState } from "react";
import { UserComponent } from "./UserComponent"
import { UsersMenuComponent } from "./UsersMenuComponent";

export const UsersComponent = () => {
    console.log('Users');

    const [users, setUsers] = useState();

    const [count, setCount] = useState(0);

    const increment = useCallback(() => {           ///використовуємо useCallback для кешування функції 
      setCount(prevCount => prevCount + 1);
    }, []);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then((objRes) => setUsers(objRes));
    },[])


    return(
        <div className="Users">
            
            <UsersMenuComponent/>
            <UserComponent/>
            <p>{count}</p>
            <button onClick={increment}>
                Inc
            </button>
        </div>
    )
}