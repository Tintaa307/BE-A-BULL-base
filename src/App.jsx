import { useState, useContext, useEffect } from "react"
import logo from "./logo.svg"
import "./App.css"
import Nav from "./components/nav/Nav"
import Home from "./components/home/Home"
import ThemeContext from "./context/themeContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AnimatedRoutes from "./components/AnimatedRoutes"
import SizeContext from "./context/sizeContext"
import AnimationContext from "./context/animationContext"

function App() {
  const { theme, color } = useContext(ThemeContext)
  const { size } = useContext(SizeContext)
  const { opaque } = useContext(AnimationContext)

  console.log(opaque)

  return (
    <>
      <div theme={theme} color={color} font-size={size} opaque={opaque}>
        <BrowserRouter>
          <Nav />
          <AnimatedRoutes />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
