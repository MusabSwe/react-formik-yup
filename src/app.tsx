import { Link, Route, Routes } from 'react-router-dom'
import './app.css'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home';
import ProtectedRoutes from './util/ProtectedRoutes';

export function App() {
  return (
    <div className="m-0 p-0 box-border">
      <nav className='bg-body-secondary p-3 d-flex justify-content-between '>
        <Link to="/" className='text-decoration-none text-black hover:text-blue'>Home</Link>
        <div>
          <Link to="/login" className='text-decoration-none text-black hover:text-blue'>Login</Link> |{' '}
          <Link to="/register" className='text-decoration-none text-black hover:text-blue'>Register</Link>
        </div>
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
