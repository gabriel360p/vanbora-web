import { api } from "./Axios";
import type { LoginInterface } from "../types/LoginFormInterface"
import type RegisterInterface from "../types/RegisterFormInterface";


export async function login(dataLogin: LoginInterface) {
    //acesso ao back-end
    try {
        const { data } = await api.post("/login", dataLogin);
        // console.log(data)
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
        // console.log("Fazendo Logout")
        localStorage.clear();
    } catch (error) {
        console.error(error)
    }
}

export async function register(dataRegister: RegisterInterface) {
    try {
        const formData = new FormData();
        formData.append("name", dataRegister.name);
        formData.append("email", dataRegister.email);
        formData.append("password", dataRegister.password);
        formData.append("cpf", String(dataRegister.cpf));
        formData.append("phone1", String(dataRegister.phone1));
        formData.append("phone2", String(dataRegister.phone2));

        if (dataRegister?.avatar)
            formData.append("avatar", dataRegister.avatar[0]);

        const { data } = await api.post("/cadastro", formData);
        console.log("Fazendo o cadastro")
        // console.log(data);
        localStorage.setItem('vanbora:user', JSON.stringify(data))
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

        // console.log(data)
        return true
    } catch (error) {
        console.error(error)
        return false
    }
}