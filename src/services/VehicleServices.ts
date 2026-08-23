// import { api } from "./Axios";

export async function editVehicle() {
    //acesso ao back-end
    try {
        // const data = await api.get("/");
        // console.log(data)
        // return data;
        console.log("Salvando alterações de veículo")
    } catch (error) {
        console.error(error)
    }
}

export async function deleteVehicle() {
    //acesso ao back-end
    try {
        // const data = await api.get("/");
        // console.log(data)
        // return data;
        console.log("Veículo apagada")
    } catch (error) {
        console.error(error)
    }
}

export async function newVehicle() {
    //acesso ao back-end
    try {
        // const data = await api.get("/");
        // console.log(data)
        // return data;
        console.log("Salvando novo veículo")
    } catch (error) {
        console.error(error)
    }
}
