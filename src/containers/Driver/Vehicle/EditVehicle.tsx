import Button from "../../../components/Button";
import Input from "../../../components/Input";

function EditVehicle() {
    return (
        <section className="
        flex flex-col  
        items-center justify-center 
        w-screen 
        px-5 
        ">
            <div>
                <h1 className="font-semibold text-xl my-5">Editar veículo</h1>
            </div>


            <div className="
                flex flex-col 
                justify-center items-center
                w-full max-w-150 min-h-120 
                gap-2 px-2.5 lg:px-4 py-4
                border border-gray-500/20 rounded shadow-md 
                ">''
                <div className="
                    flex flex-col 
                    w-full
                    gap-3
                    ">
                    <Input full label="Modelo" type="text" placeholder="Modelo" />
                    <Input full label="Placa" type="text" placeholder="Placa" />
                    <Input full label="Cor" type="text" placeholder="Cor" />
                    <Input full label="Capacidade" type="number" placeholder="Capacidade" />

                </div>
                <div className="flex flex-col gap-1 w-full relative">
                    <Input type="file" label="Foto do veículo" />
                </div>
                <div className="w-[50%] mt-4">
                    <Button title="Salvar" type="button" full />
                </div>
            </div>
        </section>

    )
}
export default EditVehicle;