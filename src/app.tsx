import { Link, Route, Routes } from 'react-router-dom'
import './app.css'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home';
import ProtectedRoutes from './util/ProtectedRoutes';

export function App() {
  return (
    <div className="m-0 p-0 box-border">
      <nav className='bg-body-secondary p-3'>
        <Link to="/login">Login</Link> |{' '}
        <Link to="/register">Register</Link>
      </nav>

      <Routes>
        <Route element={<ProtectedRoutes />}>
          {/* Protected routes go here */}
          <Route path="/" index element={<Home />} />
        </Route>
        <Route path="/register" index element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}
