// interface TripCardProps {
//     hour: string,
//     days: string,
//     driver: string,
//     vehicle: string,
//     state: boolean
// }

import { GpsIcon, UserIcon } from "@phosphor-icons/react";
import { CarProfileIcon } from "@phosphor-icons/react/dist/ssr";
import Button from "./Button";
import { useNavigate } from 'react-router-dom'

function TripCard() {
    const navigate = useNavigate();
    return (
        <div className="
        flex flex-col
        justify-center
        min-w-60 max-w-180 h-70 
        gap-2 px-4
        shadow-md rounded-md interactive-animation
        ">
            <div className="flex justify-start">
                <p className="font-bold text-xl">05:00</p>
            </div>

            <div className="flex flex-col items-start justify-center gap-4">

                <div className="flex items-center gap-2">
                    <GpsIcon size={20} />
                    <div className="flex flex-col">
                        <p className="font-bold">Rodoviária de Caicó</p>
                        <p>Ponto de embarque</p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <UserIcon size={20} />
                    <div className="flex flex-col">
                        <p className="font-bold">Maria de fátima</p>
                        <p>Motorista</p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <CarProfileIcon size={20} />
                    <div className="flex flex-col">
                        <p className="font-bold">Mercedes Sprinter</p>
                        <p>16 lugares</p>
                    </div>
                </div>

            </div>

            <div className="flex justify-center items-start">
                <Button title="Ver detalhes" type="button" click={() => navigate('/viagem-detalhes/1')} />
            </div>
        </div>
    )
}

export default TripCard;