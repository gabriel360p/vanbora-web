import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

function Default() {
    return (
        <>
            <Navbar />
            <div className="h-14" />
            <Outlet />
        </>
    )
}

export default Default;