import React, { useState, useContext } from "react"
import "./nav.css"
import ThemeContext from "../../context/themeContext"
import { motion } from "framer-motion"

const links = [
  {
    title: "Home",
  },
  {
    title: "About",
  },
  {
    title: "Diet",
  },
  {
    title: "Contact",
  },
]

const Nav = () => {
  const [isOpen, setIsOpen] = useState("")
  const toggleColors = () => {
    setIsOpen(isOpen === "" ? "open" : "")
  }
  const { color, toggleThemeDark, toggleThemeLight, changeColor } =
    useContext(ThemeContext)
  return (
    <header className="container-header">
      <nav className="container-nav">
        <ul className="container-nav-list">
          {links.map((link, index) => {
            return (
              <li key={index}>
                <motion.a href="#">{link.title}</motion.a>
              </li>
            )
          })}
        </ul>
        <div className="container-title">
          <h1>BE A FUCKING BULL</h1>
          <i class="ri-leaf-line"></i>
        </div>
        <div className="container-settings">
          <i onClick={toggleColors} class="ri-settings-3-line"></i>
        </div>
        <div className={["container-colores", isOpen].join(" ")}>
          <div onClick={toggleThemeLight} className="color">
            <button onClick={changeColor} value={1} className="red">
              <i class="ri-check-line"></i>
            </button>
          </div>
          <div onClick={toggleThemeLight} className="color">
            <button onClick={changeColor} value={2} className="blue">
              <i class="ri-check-line"></i>
            </button>
          </div>
          <div onClick={toggleThemeLight} className="color">
            <button onClick={changeColor} value={3} className="orange">
              <i class="ri-check-line"></i>
            </button>
          </div>
          <div onClick={toggleThemeLight} className="color">
            <button onClick={changeColor} value={4} className="green">
              <i class="ri-check-line"></i>
            </button>
          </div>
          <div onClick={toggleThemeLight} className="color">
            <button onClick={changeColor} value={5} className="rosa">
              <i class="ri-check-line"></i>
            </button>
          </div>

          <div onClick={toggleThemeDark} className="color">
            <button onClick={changeColor} value={6} className="red">
              <i class="ri-check-line"></i>
            </button>
          </div>
          <div onClick={toggleThemeDark} className="color">
            <button onClick={changeColor} value={7} className="blue">
              <i class="ri-check-line"></i>
            </button>
          </div>
          <div onClick={toggleThemeDark} className="color">
            <button onClick={changeColor} value={8} className="orange">
              <i class="ri-check-line"></i>
            </button>
          </div>
          <div onClick={toggleThemeDark} className="color">
            <button onClick={changeColor} value={9} className="green">
              <i class="ri-check-line"></i>
            </button>
          </div>
          <div onClick={toggleThemeDark} className="color">
            <button onClick={changeColor} value={10} className="rosa">
              <i class="ri-check-line"></i>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Nav
