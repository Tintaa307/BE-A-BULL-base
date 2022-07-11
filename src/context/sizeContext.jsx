import React, { useState, createContext, useEffect } from "react"

const SizeContext = createContext()

const SizeProvider = ({ children }) => {
  const [size, setSize] = useState("")

  const loadData = () => {
    const size = localStorage.getItem("size")
    if (size) {
      setSize(size)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const toggleSize = () => {
    setSize(size === "" ? "big" : "")
  }

  const data = { size, toggleSize }

  return <SizeContext.Provider value={data}>{children}</SizeContext.Provider>
}

export { SizeProvider }
export default SizeContext
