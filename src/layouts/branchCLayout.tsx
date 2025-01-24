import { CAComponent } from "../components/branchC/branchCA/CAComponent"
import { CBComponent } from "../components/branchC/branchCB/CBComponent"
import { CCComponent } from "../components/branchC/branchCC/CCComponent"

export const branchCLayout = () => {
    return(
        <div>
            <CAComponent/>
            <CBComponent/>
            <CCComponent/>
        </div>
    )
}