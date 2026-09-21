// import { api } from "./Axios";

import type EditUserFormInterface from "../types/EditUserFormInterface"
import { api } from "./Axios";


export async function editDriver(dataUpdateDriver: EditUserFormInterface) {
    //acesso ao back-end
    try {
        const formData = new FormData();

        if (dataUpdateDriver.name) formData.append('name', dataUpdateDriver.name);
        if (dataUpdateDriver.email) formData.append('email', dataUpdateDriver.email);
        if (dataUpdateDriver.cpf) formData.append('cpf', String(dataUpdateDriver.cpf));
        if (dataUpdateDriver.password) formData.append('password', dataUpdateDriver.password);
        if (dataUpdateDriver.phone1) formData.append('phone1', String(dataUpdateDriver.phone1));
        if (dataUpdateDriver.phone2) formData.append('phone2', String(dataUpdateDriver.phone2));
        if (dataUpdateDriver.avatar) formData.append('avatar', dataUpdateDriver.avatar[0]);

        const { data } = await api.post("/driver/update", formData);

        //atualizando dados do usuário no react após alterar
        data.photoUrl = "http://localhost:8000" + data.photoUrl;;
        localStorage.setItem('vanbora:user', JSON.stringify(data))

        console.log("Salvando alterações motorista")
        return data;
    } catch (error) {
        console.error(error)
    }
}

export async function deleteDriver() {
    //acesso ao back-end
    try {
        // const data = await api.get("");
        // console.log(data)
        // return data;
        console.log("Deletando minha conta")
    } catch (error) {
        console.error(error)
    }
}

export async function suspendedDriver() {
    //acesso ao back-end
    try {
        // const data = await api.get("/");
        // console.log(data)
        // return data;
        console.log("Motorista suspenso")
    } catch (error) {
        console.error(error)
    }
}