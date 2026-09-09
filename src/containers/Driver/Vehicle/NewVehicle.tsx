import Button from "../../../components/Button";
import Input from "../../../components/Input";

function NewVehicle() {
    return (
        <section className="
        flex flex-col  
        items-center justify-center 
        w-screen 
        px-5 
        ">
            {/* mt-14 xl:mt-10 */}
            <div>
                <h1 className="font-semibold text-xl my-5">Novo veículo</h1>
            </div>


            <div className="
                flex flex-col 
                justify-center items-center
                w-full max-w-150 min-h-120 
                gap-2 px-2.5 lg:px-4 py-4
                border border-gray-500/20 rounded shadow-md 
                ">
                <div className="
                    flex flex-col 
                    w-full
                    gap-3
                    ">
                    {/*model  */}
                    <Input full label="Modelo" type="text" placeholder="Modelo" />
                    {/* license_plate */}
                    <Input full label="Placa" type="text" placeholder="Placa" />
                    {/* color */}
                    <Input full label="Cor" type="color" placeholder="Cor" />
                    {/*passenger_capacity  */}
                    <Input full label="Capacidade" type="number" placeholder="Capacidade" />

                </div>
                <div className="flex flex-col gap-1 w-full relative">
                    <Input type="file" label="Foto do veículo" />
                </div>

                <div className="flex w-full flex-col gap-2 mt-1">
                    <label htmlFor="">Informações adicionais (opcional)</label>
                    <textarea className="
                    border border-gray-300 rounded-md p-4
                    " name="" placeholder="Informações adicionais (opcional)" id=""></textarea>
                </div>

                <div className="w-[50%] mt-4">
                    <Button title="Salvar" type="button" full />
                </div>
            </div>
        </section>

    )
}
export default NewVehicle;

// vehicles
// ├── id
// ├── driver_id
// ├── model
// ├── plate
// ├── capacity
// └── status