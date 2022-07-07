import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import "../nav/nav.css"
import LogoutButton from "./Logout"

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0()
  return (
    <div className="container-login-link">
      {!isAuthenticated ? (
        <>
          <i
            onClick={() => loginWithRedirect()}
            class="ri-login-circle-line"
          ></i>
        </>
      ) : (
        <>
          <LogoutButton />
        </>
      )}
    </div>
  )
}

export default LoginButton
