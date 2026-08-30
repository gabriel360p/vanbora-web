import { useEffect, useState } from "react";
import { isAuthenticate } from "./AuthServices";
import { Navigate, Outlet } from "react-router-dom";

export function AuthMiddleware() {
    const [isAuth, setIsAuth] = useState<null | boolean>(null);

    useEffect(() => {
        async function handleIsAuthenticate() {
            const result = await isAuthenticate();
            setIsAuth(result);
        }
        handleIsAuthenticate();
    }, [])

    if (isAuth === null) {
        return <p>Verificando</p>
    }

    if (isAuth) {
        return (
            <Outlet />
        )
    }

    return (
        <Navigate to="/login" replace />
    )
}