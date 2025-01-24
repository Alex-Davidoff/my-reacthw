import { CCAComponent } from "./branchCCA/CCAComponent"
import { CCBComponent } from "./branchCCB/CCBComponent"

export const CCComponent = () => {
    return(
        <div>
            <CCAComponent/>
            <CCBComponent/>
        </div>
    )
}