import { createContext, useContext, useEffect, useState } from "react";

//criando o context
const UserContext = createContext<typeof UserContext>(null);

//é um component que tem dados globais que podem ser acessados por qualquer outro component filho
export function UserProvider({ children }) {
    const [user, setUser] = useState({});

    function refreshUser() {
        setUser(JSON.parse(localStorage.getItem('vanbora:user')))
        return user;
    }

    return (
        <UserContext.Provider value={{ user, refreshUser }}>
            {children}
        </UserContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useUser() {
    return useContext(UserContext)
}