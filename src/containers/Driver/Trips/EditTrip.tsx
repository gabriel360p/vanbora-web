import Button from "../../../components/Button";
import Input from "../../../components/Input";

function EditTrip() {
    return (
        <section className="
        flex flex-col  
        items-center justify-center 
        w-screen 
        px-5 
        ">
            <div>
                <h1 className="font-semibold text-xl my-2">Editar viagem</h1>
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

                    {/* <Input full label="Saindo de" type="text" placeholder="Saindo de" />
                    <Input full label="Indo para" type="text" placeholder="Indo para" /> */}

                    <div className="flex flex-col md:flex-row w-full gap-2">
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="">Saindo de</label>
                            <Input full type="text" placeholder="Saindo de" />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="">Indo para</label>
                            <Input full type="text" placeholder="Indo para" />
                        </div>

                    </div>

                    <div className="flex flex-col md:flex-row w-full gap-2">
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="">Horário de saída</label>
                            <Input full type="time" />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="">Horário de chegada previsto</label>
                            <Input full type="time" />
                        </div>

                    </div>
                    <div className="flex flex-col">
                        <div>
                            <p>
                                Dias da semana
                            </p>
                        </div>
                        <div className="flex gap-3 py-2 flex-col md:flex-row">
                            <div className="flex flex-row items-center gap-2">
                                <Input type="checkbox" />
                                <label>Seg</label>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <Input type="checkbox" />
                                <label>Ter</label>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <Input type="checkbox" />
                                <label>Qua</label>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <Input type="checkbox" />
                                <label>Qui</label>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <Input type="checkbox" />
                                <label>Sex</label>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <Input type="checkbox" />
                                <label>Sab</label>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <Input type="checkbox" />
                                <label>Dom</label>
                            </div>
                        </div>

                    </div>
                    <Input full label="Ponto de embarque" type="text" placeholder="Ponto de embarque" />
                    <Input full label="Valor da viagem" type="number" placeholder="Valor da viagem" />

                    <label htmlFor="">Informações adicionais (opcional)</label>
                    <textarea className="
                    border border-gray-300 rounded-md p-4
                    " name="" placeholder="Informações adicionais (opcional)" id=""></textarea>
                </div>
                <div className="w-[50%] mt-4">
                    <Button title="Salvar" type="button" full />
                </div>
            </div>
        </section >


    )
}
export default EditTrip;