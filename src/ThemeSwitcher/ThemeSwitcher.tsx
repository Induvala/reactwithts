import React from 'react'
import useTheme from '../context/ThemeContext';
import '../index.css'

function ThemeSwitcher() {
    const {theme,darkTheme,lightTheme} = useTheme();

    function handleToggle(){
        if(theme === 'light'){
            darkTheme();
        }
        else{
            lightTheme();
        }
    }
  return (
    <div className={theme ==='light' ? 'bg-gray-500':'bg-blue-500'}>
        {theme === 'light' ? 'light':'dark'}
        <button style={{
        padding: "10px 20px",
        borderRadius: "8px",
        cursor: "pointer",
        border: "none",
        background: theme === "light" ? "#222" : "#ddd",
        color: theme === "light" ? "#fff" : "#000",
      }} onClick={handleToggle} >ToggleButton</button>
    </div>
  )
}

export default ThemeSwitcher