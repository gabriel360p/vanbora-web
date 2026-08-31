import { useEffect, useState } from "react";
import { isAuthenticate } from "./AuthServices";
import { Navigate, Outlet } from "react-router-dom";
import { SpinnerIcon } from "@phosphor-icons/react";

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
        return (
            <div className="flex items-center justify-center fixed w-screen h-screen">
                <div className="flex flex-col gap-4">
                    <SpinnerIcon size={28} className="text-primary animate-spin" />
                </div>
            </div>
        )
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