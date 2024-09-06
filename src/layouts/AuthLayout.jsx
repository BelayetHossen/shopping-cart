import { Outlet } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

const AuthLayout = () => {
    return (
        <>

            <Outlet />
        </>
    );
};

export default AuthLayout;