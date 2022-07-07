import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import "../nav/nav.css"

const LogoutButton = () => {
  const { logout } = useAuth0()
  return (
    <div className="container-logout-link">
      <i onClick={() => logout()} class="ri-logout-box-line"></i>
    </div>
  )
}

export default LogoutButton
