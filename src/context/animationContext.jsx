import React, { createContext, useState, useEffect } from "react"

const AnimationContext = createContext()

const AnimationProvider = ({ children }) => {
  const [isAnimated, setIsAnimated] = useState("")

  const toggleAnimated = () => {
    setIsAnimated(isAnimated === "" ? "opaque" : "")
  }

  const loadData = () => {
    const isAnimated = localStorage.getItem("isAnimated")
    if (isAnimated) {
      setIsAnimated(isAnimated)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const data = { isAnimated, toggleAnimated }

  return (
    <AnimationContext.Provider value={data}>
      {children}
    </AnimationContext.Provider>
  )
}

export { AnimationProvider }
export default AnimationContext
