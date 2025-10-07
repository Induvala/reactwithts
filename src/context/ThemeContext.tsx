import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({
    theme: 'light',
    darkTheme : () =>{},
    lightTheme :()=>{},

});
export const ThemeProvider = ({children}:any)=>{
    const [theme,setTheme] = useState('light');

    function darkTheme(){
        setTheme('dark')
    }
    function lightTheme(){
        setTheme('light')
    }
    return (
        <ThemeContext.Provider value={{theme,darkTheme,lightTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};
export default function useTheme(){
    return useContext(ThemeContext);
}