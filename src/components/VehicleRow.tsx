import { deleteVehicle } from "../services/VehicleServices";
import type Vehicle from "../types/VehicleInterface";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

interface props {
    data: Vehicle,
}

function VehicleRow({ data }: props) {
    const navigate = useNavigate()
    return (
        <>
            <div className="
                    flex flex-col
                    w-full max-w-80
                    md:justify-between
                    gap-4 border border-gray-300 rounded-md shadow-md p-4
                     ">
                <div className="
                    flex 
                    w-full
                    ">
                    <p className="font-bold">
                        {data.model}
                    </p>
                </div>
                <div className="flex w-full">
                    <div className="
                    flex
                    w-full max-w-45
                    ">
                        <img src={'http://localhost:8000' + data.photos_path[0]} className="object-cover w-full h-30 rounded-md" alt="foto-veiculo" />
                    </div>

                    <div className="
                    flex flex-col 
                    justify-center
                    gap-1 ps-2.5 md:ps-4
                    ">
                        <div className="flex flex-col gap-1">
                            <p className="text-[1rem] md:text-lg font-semibold">Placa: {data.plate}</p>
                            <p className="text-[1rem] md:text-lg">{data.capacity} lugares</p>
                        </div>
                        <div className="flex gap-1">
                            <Button type="button" title="Editar" outline click={() => navigate('/veiculo/1')} />
                            <Button type="button" title="Apagar" outline click={() => deleteVehicle()} />
                        </div>

                    </div>

                </div>
            </div>
        </>

    )
}

export default VehicleRow;