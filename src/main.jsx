import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { ThemeProvider } from "./context/themeContext"
import "./index.css"
import { Auth0Provider } from "@auth0/auth0-react"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Auth0Provider
        domain="dev-3ez0xdly.us.auth0.com"
        clientId="Kn5nqzEethnznWAn4dAqwjf95pwfumYU"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </ThemeProvider>
  </React.StrictMode>
)
