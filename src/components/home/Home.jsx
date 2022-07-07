import React, { useEffect, useState, useRef } from "react"
import "./home.css"
import TypeAnimation from "react-type-animation"

const Home = () => {
  return (
    <main className="container-home">
      <h1>
        Turn into a
        <span class="container-typing">
          <TypeAnimation
            cursor={false}
            sequence={[
              "Bull",
              2400,
              "Toro",
              2400,
              "Touro",
              2400,
              "Taureau",
              2400,
              "Stier",
              2400,
            ]}
            wrapper="h1"
            repeat={Infinity}
            className="type"
          />
        </span>
      </h1>
      <div className="container-content">
        <div className="container-info-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            perspiciatis vitae. Assumenda, autem atque. Nisi totam cupiditate
            incidunt pariatur ipsum?
          </p>
          <div className="container-button">
            <a className="neon" href="#">
              <span className="span"></span>
              <span className="span"></span>
              <span className="span"></span>
              <span className="span"></span>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
