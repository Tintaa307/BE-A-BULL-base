import React from "react"
import "./login.css"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Login = () => {
  return (
    <div className="container-login">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.1, type: "spring", bounce: 0.7 }}
        className="container-form-login"
      >
        <div className="container-nav-login">
          <div className="container-title">
            <h1>Registrarse</h1>
            <div className="container-back-to">
              <Link to="/" className="link">
                <i class="ri-arrow-left-line"></i>
              </Link>
            </div>
          </div>
          <form className="formulario">
            <div className="inputBox">
              <input type="text" className="input" />
              <span className="span">Usuario</span>
            </div>
            <div className="inputBox">
              <input type="password" className="input" />
              <span className="span">Contraseña</span>
            </div>
            <div className="inputBox">
              <input type="email" className="input" />
              <span className="span">Email</span>
            </div>
            <button type="submit" className="btn">
              Registrarse
            </button>
          </form>
          <h6></h6>
        </div>
      </motion.div>
    </div>
  )
}

export default Login
