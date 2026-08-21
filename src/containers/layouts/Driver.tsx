import { Outlet } from "react-router-dom";
import NavbarDriverboard from "../../components/NavbarDriverboard";
// import DriverboardSidebar from "../../components/DriverboardSidebar";

function Driver() {
    return (
        <>
            <NavbarDriverboard />
            <div className="h-14" />

            <Outlet />
        </>
    )
}

export default Driver;