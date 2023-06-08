import { Navigate } from 'react-router-dom'

export interface IProtectedRouteProps {
  isAuthenticated: boolean
  authenticationPath: string
  outlet: JSX.Element
}

const ProtectedRoute = ({
  isAuthenticated,
  authenticationPath,
  outlet,
}: IProtectedRouteProps): React.ReactElement => {
  if (isAuthenticated) {
    return outlet
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />
  }
}
export default ProtectedRoute
