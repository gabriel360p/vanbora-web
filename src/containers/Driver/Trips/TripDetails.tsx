//Para acessar essa página, ao clicar no botão eu devo mandar o id do motorista, pra poder recuperar todos os dados dele,
//capturo o id passado via url, mando ao backend, ele me retorna os dados e eu mostro eles aqui.

import { CalendarBlankIcon, ClockIcon, CoinIcon, InfoIcon, PhoneIcon, VanIcon } from "@phosphor-icons/react";
import Button from "../../../components/Button";

function TripDetails() {
    return (
        <>
            <h1 className="font-bold text-xl my-5 ms-5">Caicó para Natal</h1>

            <section className="
            flex flex-col md:flex-row 
            md:justify-center
            gap-8 px-3 pb-8
            ">
                <div className="
                flex flex-col
                md:w-screen md:max-w-200
                bg-white
                shadow-md
                gap-5 md:gap-6
                p-4 md:px-6 md:py-8
                ">
                    <div className="flex gap-2 items-center">
                        <div className="flex items-center">
                            <ClockIcon size={20} className="" />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-[12px] md:text-[1.3rem]">Saída</h2>
                            <h2 className="text-[12px] font-bold md:text-[1rem]">05:00</h2>
                        </div>
                    </div>

                    <div className="flex gap-2 items-center">
                        <div className="flex items-center">
                            <CalendarBlankIcon size={20} />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-[12px] md:text-[1.3rem]">Dias de operação</h2>
                            <h2 className="text-[12px] md:text-[1rem]">Seg - Sáb</h2>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div className="flex items-center">
                            <VanIcon size={20} />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-[12px] md:text-[1.3rem]">Ponto de embarque</h2>
                            <h2 className="text-[12px] font-bold md:text-[1rem]">Rodoviária de Caicó</h2>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div className="flex items-center">
                            <ClockIcon size={20} />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-[12px] md:text-[1.3rem]">Chegada prevista</h2>
                            <h2 className="text-[12px] font-bold md:text-[1rem]">08:00</h2>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div className="flex items-center">
                            <CoinIcon size={20} />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-[12px] md:text-[1.3rem]">Valor</h2>
                            <h2 className="text-[12px] font-bold md:text-[1rem]">R$ 50,00</h2>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div className="flex items-center">
                            <InfoIcon size={20} />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-[12px] md:text-[1.3rem]">Informações Adicionais</h2>
                            <h2 className="text-[11px] md:text-[1rem]">Viagem direta sem paradas.</h2>
                        </div>
                    </div>

                </div>

                <div className="
                flex flex-col
                gap-4
                md:w-screen md:max-w-100
                ">

                    <div className="
                    flex flex-col 
                    justify-center
                    h-30 md:h-35
                    gap-2 md:gap-4 px-4
                    shadow-md rounded-md 
                    ">
                        <h2 className="font-bold text-[13px] md:text-[1.2rem]">Motorista</h2>

                        <div className="flex gap-4">
                            <div>
                                <img src="" alt="selfie" />
                            </div>

                            <div className="flex gap-1 flex-col">
                                <h2 className="font-semibold text-[14px] md:text-[1rem]">Gabriel Costa</h2>
                                <p className="text-gray-600 text-[13px] md:text-[0.9rem]">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>

                    </div>
                    <div className="
                    flex flex-col 
                    justify-center
                    h-38 md:h-40
                    gap-2 md:gap-4 px-4
                    shadow-md rounded-md 
                    ">
                        <h2 className="font-bold text-[13px] md:text-[1.2rem]">Veículo</h2>

                        <div className="flex gap-4">
                            <div>
                                <img src="" alt="veículo" />
                            </div>

                            <div className="flex gap-1 flex-col">
                                <h2 className="font-semibold text-[14px] md:text-[1rem]">Mercedes Sprinter</h2>
                                <p className="text-gray-600 text-[13px] md:text-[0.9rem]">16 lugares.</p>
                                <p className="text-gray-600 text-[13px] md:text-[0.9rem]">Placa: ABC-123 </p>
                            </div>
                        </div>



                    </div>
                    <div className="flex gap-4 flex-col p-4 shadow-md md:h-50 md:justify-center md:gap-6">
                        <h2 className="font-bold text-[12px] text-start md:text-[1.2rem]">Contato</h2>
                        <div className="flex flex-row gap-2 items-center">
                            <PhoneIcon size={22} />
                            <p className="font-semibold text-[14px] md:text-[1rem]">(84)99999-9999</p>
                        </div>
                        <Button title="Entrar em contato" type="button" full style="" />
                    </div>
                </div>



            </section>
        </>
    )
}

export default TripDetails;
