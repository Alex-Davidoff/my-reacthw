import { ReactNode } from "react";
import { ISimpson } from "../models/ISimpson";
import './CharacterComponentf.css';

interface IChar {
    item: ISimpson,
    children: ReactNode
}

function CharacterComponent ({item, children}: IChar){
    return(
        <div className="c_simpson w-80 bg-amber-200 rounded-2xl text-center p-4">
            <h2 className="text-3xl font-semibold">{item.name} {item.surname}</h2>
            <h4 className="text-2xl font-semibold mb-4">{item.age} years old</h4>
            <img className="max-h-64 mx-auto" src={item.photo} alt={item.name+' '+item.surname} />
            <p>{children}</p>
        </div>
    )
}

export default CharacterComponent;