import { AAComponent } from "./branchAA/AAComponent"
import { ABComponent } from "./branchAB/ABComponent"

export const AComponents = () => {
    return(
        <div className="brA">
            <AAComponent/>
            <ABComponent/>
        </div>
    )
}