import { CAComponent } from "./branchCA/CAComponent"
import { CBComponent } from "./branchCB/CBComponent"
import { CCComponents } from "./branchCC/CCComponent"

export const CComponents = () => {
    return(
        <div className="brC">
            <CAComponent/>
            <CBComponent/>
            <CCComponents/>
        </div>
    )
}