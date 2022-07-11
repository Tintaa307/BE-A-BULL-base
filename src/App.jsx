import { useState, useContext, useEffect } from "react"
import logo from "./logo.svg"
import "./App.css"
import Nav from "./components/nav/Nav"
import Home from "./components/home/Home"
import ThemeContext from "./context/themeContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AnimatedRoutes from "./components/AnimatedRoutes"
import SizeContext from "./context/sizeContext"

function App() {
  const { theme, color } = useContext(ThemeContext)
  const { size } = useContext(SizeContext)
  return (
    <>
      <div theme={theme} color={color} size={size}>
        <BrowserRouter>
          <Nav />
          <AnimatedRoutes />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
