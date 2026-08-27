import { api } from "./Axios";
import type { LoginValidation } from "../types/LoginFormValidation"


export async function login(dataLogin: LoginValidation) {
    //acesso ao back-end
    try {
        const { data } = await api.post("/login", dataLogin);
        console.log(data)
        console.log("Fazendo Login")
        localStorage.setItem('vanbora:user', JSON.stringify(data))
        return true;
    } catch (error) {
        console.error(error)
        return false;
    }
}

export async function logout() {
    //acesso ao back-end
    try {
        await api.get("/logout");
        console.log("Fazendo Logout")
        localStorage.clear();
    } catch (error) {
        console.error(error)
    }
}

export async function register() {
    //acesso ao back-end
    try {
        // const data = await api.get("/");
        // console.log(data)
        // return data;
        console.log("Fazendo o cadastro")
    } catch (error) {
        console.error(error)
    }
}