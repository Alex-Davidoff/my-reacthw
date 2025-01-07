import { simpsons } from "../data/simpsonsattay";
import CharacterComponent from "./CharacterComponentf";
import './FamilyComponentf.css';

function FamilyComponent(){
    return (
        <div className="c_family flex flex-auto flex-wrap justify-center gap-6">
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