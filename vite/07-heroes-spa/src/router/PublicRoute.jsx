import PropTypes from 'prop-types'
import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../auth"

export const PublicRoute = ({children}) => {

    const { authState } = useContext(AuthContext)

  return ( !authState?.logged )
  ? children
  : <Navigate to={'/marvel'}/>
}


PublicRoute.propTypes = {
    children: PropTypes.any
}