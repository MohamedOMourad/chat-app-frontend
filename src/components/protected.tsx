import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Protected = () => {
    const isAuthenticated = useSelector((state: RootState) => state.authentication.authenticated);
    return (
        isAuthenticated ? <Outlet /> : <Navigate to='/' />
    );
};
export default Protected;
