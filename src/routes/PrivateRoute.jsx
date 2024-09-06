import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router'
import { AuthContext } from '../context/ContextProvider'


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <div>Lodding........</div>
    }

    if (user) {
        return children
    }
    return <Navigate to='/user/login' state={{ from: location }} replace></Navigate>
}

export default PrivateRoute;