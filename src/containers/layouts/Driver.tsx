import { Outlet } from "react-router-dom";
import NavbarDriverboard from "../../components/NavbarDriverboard";
// import DriverboardSidebar from "../../components/DriverboardSidebar";

function Driver() {
    return (
        <>
            <NavbarDriverboard />
            <div className="h-20" />

            <Outlet />
            <div className="h-8" />
        </>
    )
}

export default Driver;