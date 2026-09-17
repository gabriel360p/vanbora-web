// import { api } from "./Axios";

import type EditUserFormInterface from "../types/EditUserFormInterface"
import { api } from "./Axios";


export async function editDriver(dataUpdateDriver: EditUserFormInterface) {
    //acesso ao back-end
    try {
        const data = await api.post("/driver/update", dataUpdateDriver);
        console.log(data)
        // return data;
        console.log("Salvando alterações motorista")
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