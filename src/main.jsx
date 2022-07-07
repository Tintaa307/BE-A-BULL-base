import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { ThemeProvider } from "./context/themeContext"
import "./index.css"
import Cursor from "./components/home/Cursor"

document.addEventListener("mousemove", function (e) {
  const cursor = document.querySelector(".cursor")
  let x = e.clientX
  let y = e.clientY

  cursor.style.top = y + "px"
  cursor.style.left = x + "px"
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
      <Cursor />
    </ThemeProvider>
  </React.StrictMode>
)
