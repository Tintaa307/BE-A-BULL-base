import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { ThemeProvider } from "./context/themeContext"
import "./index.css"
import { Auth0Provider } from "@auth0/auth0-react"
import { SizeProvider } from "./context/sizeContext"
import { AnimationProvider } from "./context/animationContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AnimationProvider>
      <ThemeProvider>
        <SizeProvider>
          <Auth0Provider
            domain="dev-3ez0xdly.us.auth0.com"
            clientId="Kn5nqzEethnznWAn4dAqwjf95pwfumYU"
            redirectUri={window.location.origin}
          >
            <App />
          </Auth0Provider>
        </SizeProvider>
      </ThemeProvider>
    </AnimationProvider>
  </React.StrictMode>
)
