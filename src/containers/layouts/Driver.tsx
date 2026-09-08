import { Outlet } from "react-router-dom";
import NavbarDriverboard from "../../components/NavbarDriverboard";
import { useEffect } from "react";
import { useUser } from "../../contexts/userContext";
// import DriverboardSidebar from "../../components/DriverboardSidebar";

function Driver() {
    const { refreshUser } = useUser();

    useEffect(() => {
        //o refreshUser serve para colocar os dados do usuário dentro do context, se não ele fica indefinido
        refreshUser()
    }, [])

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