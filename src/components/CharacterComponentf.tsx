import { ReactNode } from "react";
import { ISimpson } from "../models/ISimpson";
import './CharacterComponentf.css';

interface IChar {
    item: ISimpson,
    children: ReactNode
}

function CharacterComponent ({item, children}: IChar){
    return(
        <div className="c_simpson ">
            <h2>{item.name} {item.surname}</h2>
            <h4>{item.age} years old</h4>
            <img src={item.photo} alt={item.name+' '+item.surname} />
            <p>{children}</p>
        </div>
    )
}

export default CharacterComponent;