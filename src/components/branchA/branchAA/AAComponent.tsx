import { useContext } from "react"
import ThemeContext from "../../../context/themeContextProvider"

export const AAComponent = () => {
    const {theme} = useContext(ThemeContext)
    return(
        <div>
            AA content
           <p>Current theme is {theme}</p>
        </div>
    )
}