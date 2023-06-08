import { ReactElement } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRouter } from './components'
import './index.css'

function App(): ReactElement {
  return (
    <Router>
      <AppRouter />
    </Router>
  )
}

export default App
