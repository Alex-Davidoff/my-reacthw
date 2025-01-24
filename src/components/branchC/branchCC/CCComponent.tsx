import { CCAComponent } from "./branchCCA/CCAComponent"
import { CCBComponent } from "./branchCCB/CCBComponent"

export const CCComponents = () => {
    return(
        <div className="brCC">
            <CCAComponent/>
            <CCBComponent/>
        </div>
    )
}