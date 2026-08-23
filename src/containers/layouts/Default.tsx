import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

function Default() {
    return (
        <>
            <Navbar />
            <div className="h-14" />
            <Outlet />
            <div className="h-8" />

        </>
    )
}

export default Default;