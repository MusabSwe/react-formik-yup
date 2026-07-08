import { Outlet, Navigate } from "react-router-dom"
const ProtectedRoutes = () => {
    const isAuthenticated = true; // Replace with actual authentication logic
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes