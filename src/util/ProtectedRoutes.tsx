import { Outlet, Navigate } from "react-router-dom"
const ProtectedRoutes = () => {
    const isAuthenticated = false; // Replace with actual authentication logic
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes