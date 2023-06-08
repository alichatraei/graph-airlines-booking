import { Routes, Route } from 'react-router-dom'
import { AuthPage } from '@features/Auth'
import { Dashboard } from '@features/Dashboard'
import ProtectedRoute, {
  IProtectedRouteProps,
} from '@components/ProtectedRoute/ProtectedRoute'

const AppRouter = () => {
  const defaultProtectedRouteProps: Omit<IProtectedRouteProps, 'outlet'> = {
    isAuthenticated: false,
    authenticationPath: '/',
  }
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route
        path="dashboard"
        element={
          <ProtectedRoute
            {...defaultProtectedRouteProps}
            outlet={<Dashboard />}
          />
        }
      />
    </Routes>
  )
}

export default AppRouter
