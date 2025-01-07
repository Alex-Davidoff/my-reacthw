import { simpsons } from "../data/simpsonsattay";
import CharacterComponent from "./CharacterComponentf";
import './FamilyComponentf.css';

function FamilyComponent(){
    return (
        <div className="flex-initial flex-wrap justify-center gap-0.5 outline-yellow-50">
        {
            simpsons.map((value,index) => 
            <CharacterComponent key={index+1} item={value}>
                {value.info}
            </CharacterComponent>)
        }
        </div>
    );
}

export default FamilyComponent;