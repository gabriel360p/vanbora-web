import Button from "../../../components/Button";
import TripRow from "../../../components/TripRow";
import { useNavigate } from "react-router-dom";

function Trips() {
    const navigate = useNavigate()

    return (
        <section className="flex flex-col p-4 gap-4">

            <h2 className="font-bold text-lg md:text-2xl">Minhas viagens</h2>

            <div className="
                flex flex-col
                w-full h-auto
                gap-4 py-4 px-5
                shadow-md border border-gray-300 rounded
            ">
                <div className="
                    flex flex-col md:flex-row md:justify-between md:items-center
                    w-full 
                    gap-4
                ">
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
                        <Button title="Adicionar nova viagem" type="button" full click={() => navigate('/nova-viagem')} />
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
                    <TripRow />
                    <TripRow />
                    <TripRow />

                </div>

            </div>

        </section>
    )
}
export default Trips;