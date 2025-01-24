import { createContext } from "react";

type ThemeType = {
    theme: string,
    changeTheme: (theme: string) => void
}

const themeDefault: ThemeType = {
    theme: 'light',
    changeTheme(theme) {
        console.log(theme);
    },
}

const ThemeContext = createContext<ThemeType>(themeDefault);

export default ThemeContext;