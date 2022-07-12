import React, { useContext, useEffect, useState, useRef } from "react"
import "./home.css"
import TypeAnimation from "react-type-animation"
import { motion } from "framer-motion"
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter"
import AnimationContext from "../../context/animationContext"

const Home = () => {
  const { opaque } = useContext(AnimationContext)
  const { text, count } = useTypewriter({
    words: ["Bull", "Toro", "Touro", "Taureau", "Stier"],
    count: 0,
    delay: 100,
    loop: false,
    onComplete: () => {
      console.log("complete")
    },
  })

  return (
    <motion.main
      initial={{ x: -800 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 0.2, type: "spring", bounce: 0.7 }}
      className="container-home"
    >
      <h1>
        Turn into a
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.8 }}
          class="container-typing"
        >
          {text}
        </motion.span>
      </h1>
      <div className="container-content">
        <div className="container-info-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            perspiciatis vitae. <br /> Assumenda, autem atque. Nisi totam
            cupiditate incidunt pariatur ipsum?
          </p>
          <div className="container-button">
            <a className={["neon", opaque].join(" ")} href="#">
              <span className="span"></span>
              <span className="span"></span>
              <span className="span"></span>
              <span className="span"></span>
              Contactanos
            </a>
          </div>
        </div>
      </div>
    </motion.main>
  )
}

export default Home
