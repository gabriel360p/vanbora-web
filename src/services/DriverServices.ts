// import { api } from "./Axios";


export async function editDriver() {
    //acesso ao back-end
    try {
        // const data = await api.get("/");
        // console.log(data)
        // return data;
        console.log("Salvando alterações motorista")
    } catch (error) {
        console.error(error)
    }
}

export async function deleteDriver() {
    //acesso ao back-end
    try {
        // const data = await api.get("/");
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