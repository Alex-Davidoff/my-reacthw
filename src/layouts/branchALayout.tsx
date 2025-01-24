import { AAComponent } from "../components/branchA/branchAA/AAComponent"
import { ABComponent } from "../components/branchA/branchAB/ABComponent"

export const branchALayout = () => {
    return(
        <div>
            <AAComponent/>
            <ABComponent/>
        </div>
    )
}