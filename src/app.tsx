import { Link, Route, Routes, useLocation } from 'react-router-dom'
import './app.css'
import Login from './components/Login'
import Register from './components/Register'

export function App() {
  const location = useLocation();
  return (
    <div className="m-0 p-0 box-border">
      <nav className='bg-body-secondary p-3'>
        <Link to="/login">Login</Link> |{' '}
        <Link to="/register">Register</Link>
      </nav>
      {location.pathname === '/' && (
        <div className="welcome">
          <h1>Welcome to the Authentication App</h1>
          <p>Please login or register to continue.</p>
        </div>
      )}
      <Routes>
        <Route path="/register" index element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}
