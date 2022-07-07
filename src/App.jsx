import { useState, useContext, useEffect } from "react"
import logo from "./logo.svg"
import "./App.css"
import Nav from "./components/nav/Nav"
import Home from "./components/home/Home"
import ThemeContext from "./context/themeContext"

function App() {
  const { theme, color } = useContext(ThemeContext)

  return (
    <>
      <div theme={theme} color={color} className="container-all">
        <Nav />
        <Home />
      </div>
    </>
  )
}

export default App
