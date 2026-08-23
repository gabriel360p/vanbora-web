import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import TripRow from "../../components/TripRow";

function Driverboard() {
    const navigate = useNavigate()
    return (
        <section className="flex flex-col gap-5 w-screen p-4">

            <div className="flex items-center flex-col w-full">
                <div className="
                flex 
                justify-start
                w-full h-auto max-h-90 
                shadow-md border border-gray-300 rounded-md
                py-8 px-2 mt-4 gap-2
                ">
                    {/* <img src="" alt="foto-motorista" /> */}
                    <div className="flex h-full w-40 items-start justify-center">
                        <div className="w-25 h-25 bg-gray-800 rounded-full" ></div>
                    </div>
                    <div className="flex gap-4 flex-col w-full max-w-80">
                        <p className="font-semibold md:text-[1.2rem]">Olá, João!</p>
                        <p className="md:text-[1rem">Bem vindo de volta ao seu painel. Gerencie suas viagens e fique por dentro de tudo</p>
                        <Button title='Meu Perfil' outline type='button' click={() => navigate('/meu-perfil')} />
                    </div>
                </div>

            </div>


            <div className="
                flex flex-col
                w-full h-auto
                gap-4 py-4 px-2
                shadow-md border border-gray-300 rounded
            ">
                <div className="
                    flex flex-col md:flex-row md:justify-between md:items-center
                    w-full 
                    gap-4
                ">
                    <h2 className="font-bold text-lg md:text-xl">Minhas viagens</h2>
                    <select className="
                        md:w-[30%]
                    ">
                        <option>Caicó</option>
                        <option></option>
                    </select>

                    <div className="
                    flex
                    w-full md:max-w-70
                    ">
                        <Button title="Adicionar nova viagem" type="button" full />
                    </div>
                </div>
                <div className="flex flex-col w-full gap-3">
                    <TripRow />
                    <TripRow />
                    <TripRow />
                    <TripRow />
                    <TripRow />
                    <TripRow />
                    <TripRow />
                    <TripRow />
                    <TripRow />
                    <TripRow />
                    <TripRow />
                </div>

            </div>

        </section>
    )
}

export default Driverboard;