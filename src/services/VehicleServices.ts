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

        const formData = new FormData();

        Array.from(vehicleData.vehicle_photo).forEach(file => {
            console.log(file)
            formData.append('vehicle_photo[]', file)
        })
        // formData.append('vehicle_photo', vehicleData.vehicle_photo[0])
        formData.append('model', vehicleData.model)
        formData.append('license_plate', vehicleData.license_plate)
        formData.append('color', vehicleData.color)
        if (vehicleData.aditional) formData.append('aditional', vehicleData.aditional)

        if (vehicleData.passenger_capacity) formData.append('passenger_capacity', String(vehicleData.passenger_capacity))

        // const data = await axios.post("http://localhost:8000/api/vehicle/store", formData);
        const data = await api.post("/vehicle/store", formData);

        console.log(data)
        console.log("Salvando novo veículo")
        return true;
    } catch (error) {
        console.error(error)
        return false;
    }
}
