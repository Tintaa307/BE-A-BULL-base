import React, { createContext, useState, useEffect } from "react"

const AnimationContext = createContext()

const AnimationProvider = ({ children }) => {
  const [opaque, setOpaque] = useState("")

  const toggleAnimated = () => {
    setOpaque(opaque === "" ? "opaque" : "")
  }

  const loadData = () => {
    const opaque = localStorage.getItem("opaque")
    if (opaque) {
      setOpaque(opaque)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const data = { opaque, toggleAnimated }

  return (
    <AnimationContext.Provider value={data}>
      {children}
    </AnimationContext.Provider>
  )
}

export { AnimationProvider }
export default AnimationContext
