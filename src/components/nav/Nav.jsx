import React, { useState, useContext, useEffect } from "react"
import "./nav.css"
import ThemeContext from "../../context/themeContext"
import { motion } from "framer-motion"
import RojoBlanco from "../../assets/img/Blanco-Rojo.svg"
import AzulBlanco from "../../assets/img/Blanco-Azul.svg"
import NaranjaBlanco from "../../assets/img/Blanco-Naranja.svg"
import VerdeBlanco from "../../assets/img/Blanco-Verde.svg"
import RosaBlanco from "../../assets/img/Blanco-Violeta.svg"
import RojoNegro from "../../assets/img/Negro-Rojo.svg"
import AzulNegro from "../../assets/img/Negro-Azul.svg"
import NaranjaNegro from "../../assets/img/Negro-Naranja.svg"
import VerdeNegro from "../../assets/img/Negro-Verde.svg"
import RosaNegro from "../../assets/img/Negro-Violeta.svg"

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
  const { theme, color, toggleThemeDark, toggleThemeLight, changeColor } =
    useContext(ThemeContext)

  const saveData = () => {
    localStorage.setItem("theme", theme)
    localStorage.setItem("color", color)
  }

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
          <i onClick={toggleColors} class="ri-palette-line"></i>
        </div>
        <div className="container-accesibilidad">
          <i class="fa-solid fa-universal-access"></i>
        </div>
        <div className={["container-colores", isOpen].join(" ")}>
          <div onClick={toggleThemeLight} className="color">
            <button value={1} className="red">
              <img onClick={changeColor} src={RojoBlanco} className="red" />
            </button>
          </div>
          <div onClick={toggleThemeLight} className="color">
            <button value={2} className="blue">
              <img onClick={changeColor} src={AzulBlanco} className="blue" />
            </button>
          </div>
          <div onClick={toggleThemeLight} className="color">
            <button value={3} className="orange">
              <img
                onClick={changeColor}
                src={NaranjaBlanco}
                className="orange"
              />
            </button>
          </div>
          <div onClick={toggleThemeLight} className="color">
            <button value={4} className="green">
              <img onClick={changeColor} src={VerdeBlanco} className="green" />
            </button>
          </div>
          <div onClick={toggleThemeLight} className="color">
            <button value={5} className="rosa">
              <img onClick={changeColor} src={RosaBlanco} className="rosa" />
            </button>
          </div>

          <div onClick={toggleThemeDark} className="color">
            <button value={6} className="red">
              <img onClick={changeColor} src={RojoNegro} className="red" />
            </button>
          </div>
          <div onClick={toggleThemeDark} className="color">
            <button value={7} className="blue">
              <img onClick={changeColor} src={AzulNegro} className="blue" />
            </button>
          </div>
          <div onClick={toggleThemeDark} className="color">
            <button value={8} className="orange">
              <img
                onClick={changeColor}
                src={NaranjaNegro}
                className="orange"
              />
            </button>
          </div>
          <div onClick={toggleThemeDark} className="color">
            <button value={9} className="green">
              <img onClick={changeColor} src={VerdeNegro} className="green" />
            </button>
          </div>
          <div onClick={toggleThemeDark} className="color">
            <button value={10} className="rosa">
              <img onClick={changeColor} src={RosaNegro} className="rosa" />
            </button>
          </div>
          <div className="container-btn-save">
            <button onClick={saveData}>Save Theme</button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Nav
