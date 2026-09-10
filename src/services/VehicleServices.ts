// import { api } from "./Axios";

import type { RegisterDriverInterface } from "../types/RegisterDriverInterface";
import { api } from "./Axios";

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

export async function newVehicle(vehicleData: RegisterDriverInterface) {
    //acesso ao back-end
    try {
        const data = await api.post("/vehicle/store", vehicleData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        console.log(data)
        console.log("Salvando novo veículo")
        return true;
    } catch (error) {
        console.error(error)
        return false;
    }
}
