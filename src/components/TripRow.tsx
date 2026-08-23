import Button from "./Button";
import { useNavigate } from "react-router-dom";


import { CalendarBlankIcon, ClockIcon } from "@phosphor-icons/react";
import { VanIcon } from "@phosphor-icons/react/dist/ssr";

function TripRow() {
    const navigate = useNavigate()

    return (
        <>
            <div className="
                    flex flex-col md:flex-row
                    md:justify-between
                    gap-4 border border-gray-300 rounded-md shadow-md p-4
                     ">
                <div className="
                        ">
                    <p className="font-semibold text-lg">Caicó para Natal</p>
                    <p className="">Rodoviária de Caicó</p>

                </div>

                <div className="
                        flex flex-row
                        gap-6
                        ">
                    <div className="flex items-center w-auto gap-1">
                        <ClockIcon size={20} />
                        <p>05:00</p>
                    </div>
                    <div className="flex items-center w-auto gap-1">
                        <CalendarBlankIcon size={20} />
                        <p>Seg a Sab</p>
                    </div>
                    <div className="flex items-center w-auto gap-1">
                        <VanIcon size={20} />
                        <p>16 lugares</p>
                    </div>
                </div>
                <div className="
                        flex justify-between md:justify-end md:gap-3 
                        
                        ">
                    <Button type="button" title="Editar" outline />
                    <Button type="button" title="Apagar" outline />
                </div>
            </div>
        </>

    )
}

export default TripRow;