import { api } from "./Axios";
import type { LoginInterface } from "../types/LoginFormInterface"
import type RegisterInterface from "../types/RegisterFormInterface";


export async function login(dataLogin: LoginInterface) {
    //acesso ao back-end
    try {
        const { data } = await api.post("/login", dataLogin);
        console.log(data)
        // console.log(JSON.parse(data))
        //salvando os dados no localstorage para ser acessado com o context
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

export async function register(dataRegister: RegisterInterface) {
    //acesso ao back-end
    try {

        await api.post("/cadastro", dataRegister);
        console.log("Fazendo o cadastro")
        return true
    } catch (error) {
        console.error(error)
        return false
    }
}

export async function isAuthenticate() {
    //acesso ao back-end
    try {
        const { data } = await api.get("/me");
        console.log(data)
        return true
    } catch (error) {
        console.error(error)
        return false
    }
}