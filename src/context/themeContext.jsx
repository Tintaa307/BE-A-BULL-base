import React, { useState, createContext } from "react"

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light")
  const [color, setColor] = useState("red")

  const changeColor = (e, color) => {
    color = e.target.className
    setColor(color)
  }

  const toggleThemeDark = () => {
    setTheme("dark")
  }

  const toggleThemeLight = () => {
    setTheme("light")
  }

  if (theme === "dark") {
    document.body.style.backgroundColor = "#13131a"
  } else {
    document.body.style.backgroundColor = "#fff"
  }

  const data = {
    theme,
    toggleThemeDark,
    toggleThemeLight,
    color,
    changeColor,
  }

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}

export { ThemeProvider }
export default ThemeContext
