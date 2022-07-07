import { useState, useContext, useEffect } from "react"
import logo from "./logo.svg"
import "./App.css"
import Nav from "./components/nav/Nav"
import Home from "./components/home/Home"
import ThemeContext from "./context/themeContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AnimatedRoutes from "./components/AnimatedRoutes"

function App() {
  const { theme, color } = useContext(ThemeContext)

  return (
    <>
      <div theme={theme} color={color} className="container-all">
        <BrowserRouter>
          <Nav />
          <AnimatedRoutes />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
