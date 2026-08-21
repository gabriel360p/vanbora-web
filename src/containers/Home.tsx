import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { searchTrips } from "../services/TripServices";
import { ClockIcon, InfoIcon, PhoneIcon } from "@phosphor-icons/react";
import TripCard from "../components/TripCard";
function Home() {
    const [tripsData, setTripsData] = useState();

    function handleSearchTrip() {
        searchTrips()
        console.log('procurando viagens')
    }

    return (
        <>
            <section className="
            flex items-center flex-col 
            w-screen h-80
            pt-12 md:pt-18
            px-4
             bg-blue-100"
            >
                <h1 className="font-extrabold mb-1 md:text-xl">
                    Encontre sua próxima viagem de van.
                </h1>
                <h2 className="text-justify text-gray-900">
                    Consulte horários, rotas e informações de transporte de forma simples e rápida.
                </h2>

                <div className="
                flex flex-col 
                justify-center 
                min-h-65 md:min-h-50 max-w-3xl w-full 
                gap-2 md:gap-4 px-4 mt-8 md:mt-12
                rounded-xl bg-white shadow-xl
                 ">
                    <h3 className="text-start">Buscar</h3>
                    <div className="
                    flex 
                    flex-col md:flex-row
                    ">
                        <Input type="text" full={true} placeholder="De onde você vai?" />
                        <div className="w-10 h-8" />
                        <Input type="text" full={true} placeholder="Para onde você vai?" />
                    </div>
                    <div>
                        <Button type="button" title="Buscar Viagem" full click={handleSearchTrip} />
                    </div>
                </div>
            </section>

            <div className="mt-45 md:mt-25" />

            <section className="
            flex flex-col md:flex-row
            items-center justify-center
            w-screen h-10
            gap-2 md:gap-16
            ">
                <div className="flex gap-3 p-2 interactive-animation">
                    <InfoIcon size={28} />
                    <p>Informações atualizadas</p>
                </div>
                <div className="flex gap-3 p-2 interactive-animation">
                    <PhoneIcon size={28} />
                    <p>Contato direto</p>
                </div>
                <div className="flex gap-3 p-2 interactive-animation">
                    <ClockIcon size={28} />
                    <p>Fácil e rápido</p>
                </div>
            </section>

            <div className="mt-25 md:mt-10" />

            <section className="
                flex flex-col
                w-screen h-auto
                px-5
            ">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="font-bold">Rotas encontradas</h2>
                    </div>
                </div>

                <div className="
                grid 
                justify-center 
                w-full h-full 
                grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
                py-4 px-2 gap-x-6 gap-y-6
                ">
                    <TripCard />
                    <TripCard />
                    <TripCard />
                    <TripCard />
                    <TripCard />
                    <TripCard />
                    <TripCard />
                    <TripCard />
                    <TripCard />
                    <TripCard />
                    <TripCard />
                    <TripCard />
                    <TripCard />
                    <TripCard />
                    <TripCard />
                    <TripCard />
                    <TripCard />
                    <TripCard />
                </div>
            </section>
        </>
    )
}
export default Home;