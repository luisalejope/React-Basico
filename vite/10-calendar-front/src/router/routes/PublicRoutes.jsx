import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'


export const PublicRoutes = ({children, status}) => {
    return (status === 'not-authenticated')
    ? children
    : <Navigate to={'/'} />
}

PublicRoutes.propTypes = {
    children: PropTypes.any,
    status: PropTypes.any
}
