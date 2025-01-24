import { useContext } from "react";
import ThemeContext from "../../context/themeContextProvider";

export const ChangeThemeComponent = () => {
    const {changeTheme} = useContext(ThemeContext);

    const btnDarkOnClick = () => {
        changeTheme('dark');
    }
    const btnLightOnClick = () => {
        changeTheme('light');
    }

    return(
        <div>
            <button onClick={btnDarkOnClick}>Theme dark</button>
            <button onClick={btnLightOnClick}>Theme light</button>
        </div>
    )
}