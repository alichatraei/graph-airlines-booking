import { ReactElement } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { AppRouter } from './components'
import './index.css'
import { store } from './redux/store/store'

function App(): ReactElement {
  return (
    <Provider store={store}>
      <Router>
        <AppRouter />
      </Router>
    </Provider>
  )
}

export default App
