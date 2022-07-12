import React, { useState, useContext, useEffect } from "react"
import "./nav.css"
import ThemeContext from "../../context/themeContext"
import SizeContext from "../../context/sizeContext"
import AnimationContext from "../../context/animationContext"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
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
import LoginButton from "../login/LoginButton"

const links = [
  {
    title: "Inicio",
    link: "/",
  },
  {
    title: "Rutinas",
    link: "/rutines",
  },
  {
    title: "Planes alimenticios",
    link: "/diets",
  },
  {
    title: "Contacto",
    link: "/contact",
  },
]

const Nav = () => {
  const [isOpen, setIsOpen] = useState("")
  const [isAppear, setIsAppear] = useState("")
  const [info, setInfo] = useState("")

  const toggleColors = () => {
    setIsOpen(isOpen === "" ? "open" : "")
    setIsAppear("")
  }

  const toggleMenu = () => {
    setIsAppear(isAppear === "" ? "appear" : "")
    setIsOpen("")
  }

  const toggleInfoMenu = () => {
    setInfo(info === "" ? "info" : "")
  }

  const closeInfoMenu = () => {
    setInfo("")
  }

  const { theme, color, toggleThemeDark, toggleThemeLight, changeColor } =
    useContext(ThemeContext)

  const { size, toggleSize } = useContext(SizeContext)

  const { opaque, toggleAnimated } = useContext(AnimationContext)

  const saveData = () => {
    localStorage.setItem("theme", theme)
    localStorage.setItem("color", color)
    setIsOpen("")
  }

  const saveSize = () => {
    localStorage.setItem("size", size)
    localStorage.setItem("opaque", opaque)
    setIsAppear("")
  }

  return (
    <header className="container-header">
      <nav className="container-nav">
        <ul className="container-nav-list">
          {links.map(({ title, link }, index) => {
            return (
              <li key={index}>
                <Link
                  onClick={() => console.log("click")}
                  to={link}
                  className="link"
                >
                  {title}
                </Link>
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
        <div className={["container-accesibilidad", isAppear].join(" ")}>
          <i onClick={toggleMenu} class="fa-solid fa-universal-access"></i>
        </div>
        <LoginButton />
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
            <button onClick={saveData}>Guardar Tema</button>
          </div>
        </div>
        <div className={["container-menu-accesibilidad", isAppear].join(" ")}>
          <h2>
            Menu Accesibilidad{" "}
            <i onClick={toggleInfoMenu} class="ri-information-line"></i>
          </h2>
          <div className="container-items">
            <div className="item">
              <h5>Problemas de vista</h5>
              <p>Aumenta el tamaño de la fuente de la página.</p>
              <label class="switch">
                <input onClick={toggleSize} type="checkbox" />
                <span class="slider"></span>
              </label>
            </div>
            <div className="item">
              <h5>Epilepsia</h5>
              <p>Desactiva las animaciones y opaca los colores.</p>
              <label class="switch">
                <input onClick={toggleAnimated} type="checkbox" />
                <span class="slider"></span>
              </label>
            </div>
            <div className="item">
              <h5>Ayuda TDAH</h5>
              <p>Ayuda a mejorar el foco de atencion.</p>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
              </label>
            </div>
            <div className="item">
              <h5>Cambio Idioma</h5>
              <p>Cambia el idioma de la pagina a ingles.</p>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
              </label>
            </div>
            <div className="item">
              <button onClick={saveSize}>Guardar </button>
            </div>
          </div>
        </div>
        <div className={["container-informacion", info].join(" ")}>
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1, transformOrigin: "right" }}
            transition={{ duration: 0.1 }}
            className="info"
          >
            <div className="container-top-info">
              <h2 className="title-box">
                ¿Para qué sirve el menú de accesibilidad?
              </h2>
              <i onClick={closeInfoMenu} class="ri-close-circle-fill"></i>
              <p>
                El menú de accesibilidad es una opción que le sirve a las
                personas con discapacidad de usar la página de una manera mas
                llevadera.
              </p>
              <h2 className="subtitle-box">OPCIONES</h2>
            </div>
            <div className="container-info-help">
              <div className="container-info-acc">
                <h3 className="box-tamaño">Aumento de tamaño: </h3>
                <p>
                  La función de este botón es aumentar el tamaño de las
                  palabras, sirve para todas aquellas personas que tengan
                  problemas de visión, o que no sean capaces de leer una letra
                  tan pequeña.
                </p>
              </div>
              <div className="container-info-acc">
                <h3 className="box-epilepsia">
                  Prevención contra la epilepsia:
                </h3>
                <p>
                  Este botón sirve como prevención para aquellas personas que
                  poseen epilepsia, desactiva completamente las animaciones y
                  disminuye tambien la luminosidad de los colores.
                </p>
              </div>
              <div className="container-info-acc">
                <h3 className="box-tdah">Ayuda a TDAH:</h3>
                <p>
                  Este botón se ocupa de activar una función que enfoca
                  precisamente donde esta ubicado el ratón y desenfocaar todo el
                  fondo dandole opacidad.
                </p>
              </div>
              <div className="container-info-acc">
                <h3 className="box-idioma">Cambio de idioma:</h3>
                <p>
                  La función de botón es cambiar el idioma de la página, ya sea
                  a inglés, italiano, francés o español.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </nav>
    </header>
  )
}

export default Nav
