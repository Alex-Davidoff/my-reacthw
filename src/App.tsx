import { useState } from 'react'
import './App.css'
import { AComponents } from './components/branchA/AComponents'
import { BComponents } from './components/branchB/BComponents'
import { CComponents } from './components/branchC/CComponents'
import ThemeContext from './context/themeContextProvider'

function App () {
   const [themeColor, setThemeColor] = useState<string>('light')

   return (
      <div className={'App '+themeColor}>
         <ThemeContext.Provider value={{
            theme: themeColor,
            changeTheme: (themeValue: string) => {
               setThemeColor(themeValue)
            }
         }}>
            <AComponents/>
            <BComponents/>
            <CComponents/>
         </ThemeContext.Provider>
      </div>
   )
}

export default App
