import { memo } from "react";

export const UsersMenuComponent = memo(() => {   //memo запобігає ререндеру компонента при оновленні і ререндері батьківського компонента
    console.log('UsersMenu');
    return(
        <div className="UsersMenu">
            <button>Action 1</button>
            <button>Action 2</button>
        </div>
    )
})