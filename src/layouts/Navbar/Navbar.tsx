import { useEffect } from 'react'
import {
  useGetCurrentUserMutation,
  useLogoutMutation,
} from '../../redux/api/api'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [getCurrentUser, { data }] = useGetCurrentUserMutation()
  const [logout, { isSuccess }] = useLogoutMutation()
  const navigate = useNavigate()
  const handleLogout = () => {
    logout()
  }

  useEffect(() => {
    getCurrentUser()
  }, [])
  useEffect(() => {
    isSuccess && navigate('/')
  }, [isSuccess])

  return (
    <div className="navbar bg-base-100 flex flex-1 justify-end">
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn">
            <span>{data?.username}</span>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <span onClick={handleLogout}>Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
