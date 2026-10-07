// import { api } from "./Axios";

import type { EditDriverInterface } from "../types/EditDriverInterface";
import type { RegisterDriverInterface } from "../types/RegisterDriverInterface";
import { api } from "./Axios";

export async function getAllVehicles() {
    //acesso ao back-end
    try {
        const { data } = await api.get("/vehicle");
        console.log(data)
        // return data;
        console.log("Pegando todos os veículos")
        return data;
    } catch (error) {
        console.error(error)
    }
}

export async function editVehicle(id: string) {
    //acesso ao back-end
    try {
        const { data } = await api.get(`/vehicle/edit/${id}`);
        console.log(data)
        console.log("buscando informações do veículo")
        return data;
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
export async function updateVehicle(vehicleData: EditDriverInterface) {
    try {

        const formData = new FormData();

        if (vehicleData.vehicle_photo) {
            Array.from(vehicleData.vehicle_photo).forEach(file => {
                console.log(file)
                formData.append('vehicle_photo[]', file)
            })
        }

        if (vehicleData.model) formData.append('model', vehicleData.model)
        if (vehicleData.plate) formData.append('plate', vehicleData.plate)
        if (vehicleData.color) formData.append('color', vehicleData.color)
        if (vehicleData.aditional) formData.append('aditional', vehicleData.aditional)

        if (vehicleData.capacity) formData.append('capacity', String(vehicleData.capacity))

        const { data } = await api.post("/vehicle/update", formData);

        console.log(data)
        console.log("Editando veículo")
        return data;
    } catch (error) {
        console.error(error)
        return false;
    }
}


export async function deletePhoto(pathPhoto: string, id: number) {
    try {

        const formData = new FormData();
        formData.append('pathPhoto', pathPhoto);

        const data = await api.post(`/vehicle/destroy/photo/${id}`, formData);
        console.log(data);
        return data;
    } catch (error) {
        console.error(error)
        return false;
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
        formData.append('model', vehicleData.model)
        formData.append('plate', vehicleData.plate)
        formData.append('color', vehicleData.color)
        if (vehicleData.aditional) formData.append('aditional', vehicleData.aditional)

        if (vehicleData.capacity) formData.append('capacity', String(vehicleData.capacity))

        await api.post("/vehicle/store", formData);

        // console.log(data)
        console.log("Salvando novo veículo")
        return true;
    } catch (error) {
        console.error(error)
        return false;
    }
}
