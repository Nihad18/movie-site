import { useAuth } from "@/context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const auth = useAuth();
    if (!auth?.token) return <Navigate to='/login' />;
    return <Outlet />;
};

export default PrivateRoute;
