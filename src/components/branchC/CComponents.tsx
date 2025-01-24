import { CAComponent } from "./branchCA/CAComponent"
import { CBComponent } from "./branchCB/CBComponent"

export const CComponents = () => {
    return(
        <div>
            <CAComponent/>
            <CBComponent/>
            <CComponents/>
        </div>
    )
}