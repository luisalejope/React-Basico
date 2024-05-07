import PropTypes from 'prop-types'
import { Navigate } from "react-router-dom"


export const PrivateRoutes = ({children, status}) => {
    return (status === 'authenticated')
    ? children
    : <Navigate to={'/auth/login'} />
}

PrivateRoutes.propTypes = {
    children: PropTypes.any,
    status: PropTypes.any
}
