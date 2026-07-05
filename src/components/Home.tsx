import { useLocation } from "react-router-dom";


const Home = () => {
    const location = useLocation();
    return (
        <div className="text-center mt-5">
            {location.pathname === '/' && (
                <div className="welcome">
                    <h1>Welcome to the Authentication App</h1>
                    <p>Please login or register to continue.</p>
                </div>
            )}
        </div>
    );
}

export default Home;