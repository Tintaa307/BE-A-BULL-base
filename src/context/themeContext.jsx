import React, { useState, createContext, useEffect } from "react"

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light")
  const [color, setColor] = useState("red")

  const loadData = () => {
    const theme = localStorage.getItem("theme")
    const color = localStorage.getItem("color")
    if (theme) {
      setTheme(theme)
    }
    if (color) {
      setColor(color)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  /*useEffect(() => {
    const localTheme = localStorage.getItem("theme")
    const localColor = localStorage.getItem("color")

    if (localTheme === "") {
      setTheme("light")
    } else {
      setTheme(localTheme)
    }

    if (localColor === "") {
      setColor("red")
    } else {
      setColor(localColor)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("color", color)
    localStorage.setItem("theme", theme)
  }, [])*/

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
