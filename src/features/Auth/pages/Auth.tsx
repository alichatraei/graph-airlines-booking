import { Dialog } from '@components/index'
import { ReactElement, useState } from 'react'

const Auth = (): ReactElement => {
  const [modalState, setModalState] = useState<boolean>(false)
  return (
    <figure className="h-screen flex bg-gray-100">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">
        <blockquote className="text-2xl font-medium text-center">
          <p className="text-2xl ">Login</p>
        </blockquote>

        <div className="text-primary m-6">
          <label className="text-left">Username:</label>
          <input
            name="username"
            type="text"
            placeholder="Username"
            className={
              'w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4'
            }
          />
          <label>Password:</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            className={
              'w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4'
            }
          />
          <div className="flex items-center mt-3 justify-center">
            <button
              onClick={() => {
                setModalState(true)
              }}
              className={
                'bg-blue-700 hover:bg-blue-500 py-2 px-4 text-md text-white rounded border border-blue focus:outline-none focus:border-black'
              }
            >
              Login
            </button>
          </div>
        </div>
      </div>
      <Dialog id="dialog" className={modalState ? 'modal-open' : ''}>
        <div className="flex flex-col justify-center-center items-center gap-y-4">
          <h1 className="text-3xl">Wrong username or password</h1>
          <button
            className="btn btn-active"
            onClick={() => {
              setModalState(false)
            }}
          >
            Ok
          </button>
        </div>
      </Dialog>
    </figure>
  )
}

export default Auth
