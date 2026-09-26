import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { useNavigate, useParams } from "react-router-dom";
import { editVehicle, updateVehicle } from "../../../services/VehicleServices";
import { SpinnerIcon } from "@phosphor-icons/react";
import type Vehicle from "../../../types/VehicleInterface";
import type { EditDriverInterface } from "../../../types/EditDriverInterface";
import { EditDriverFormSchema } from "../../../schemas/EditDriverFormSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

function EditVehicle() {
    const [vehicle, setVehicle] = useState<Vehicle>();
    const { id } = useParams();
    const { register, resetField, formState: { errors }, handleSubmit } = useForm<EditDriverInterface>({
        resolver: yupResolver(EditDriverFormSchema)
    });
    const [load, setLoad] = useState<boolean>(false);
    const navigate = useNavigate();

    function handleClearFiles() {
        resetField('vehicle_photo');
    }

    function handleEditDriver(vehicleData: EditDriverInterface) {
        if (
            (vehicleData.model != "") ||
            (vehicleData.plate != "") ||
            (Number(vehicleData.capacity) > 0) ||
            (vehicleData.color != "") ||
            (vehicleData.vehicle_photo?.item(0)) ||
            (vehicleData.vehicle_photo?.item(1)) ||
            (vehicleData.aditional != "")
        ) {
            setLoad(true)

            //ele vai capturar os novos dados e vai atualizar o state:
            const newData: Vehicle = updateVehicle(vehicleData!);
            // setVehicle(newData)

            setLoad(false)
            toast.success("Novas informações salvas!")
        } else {
            toast.warning("Nenhuma nova informação foi inserida")
        }
    }

    async function handleGetVehicle(id: string) {
        setLoad(true);
        const vehicleData: Vehicle = await editVehicle(id)
        setVehicle(vehicleData);
        setLoad(false);
    }
    useEffect(() => {
        handleGetVehicle(id!);
    }, [])

    return (
        <section className="
        flex flex-col  
        items-center justify-center 
        w-screen 
        px-5 
        ">
            {load && (
                <div className="flex fixed w-screen h-screen justify-center items-center">
                    < span className="animate-spin" > <SpinnerIcon size={32} className="text-primary" /> </ span>
                </div >
            )
            }

            <div>
                <h1 className="font-semibold text-xl my-5">Editar {vehicle?.model}</h1>
            </div>

            <form encType="multipart/form-data" className="flex w-full justify-center"
                onSubmit={handleSubmit((data) => {
                    handleEditDriver(data)
                })}
            >
                <div className="
                flex flex-col 
                justify-center items-center
                w-full max-w-150 min-h-100 
                gap-2 px-2.5 lg:px-4 py-4
                border border-gray-500/20 rounded shadow-md 
                ">
                    <div className="
                    flex flex-col 
                    w-full
                    gap-2
                    ">
                        <div className="flex flex-col md:flex-row md:gap-2">
                            <div className="flex flex-col gap-2 w-full">
                                {/*model  */}
                                <Input full label="Modelo" type="text"
                                    placeholder={`Modelo: ${vehicle?.model}`}
                                    {...register('model')} error={errors.model?.message}
                                />
                            </div>
                            <div className=" flex flex-col gap-2 w-full">
                                {/* license_plate */}
                                <Input full label="Placa" type="text"
                                    placeholder={`Placa: ${vehicle?.plate}`}
                                    {...register('plate')} error={errors.plate?.message}
                                />
                            </div>

                        </div>
                        <div className="flex flex-col md:flex-row md:gap-2">
                            <div className="flex flex-col gap-2 w-full">
                                {/*cor  */}
                                <Input full label="Cor" type="text"
                                    placeholder={`Cor: ${vehicle?.color}`}
                                    {...register('color')} error={errors.color?.message}
                                />
                            </div>
                            <div className=" flex flex-col gap-2 w-full">
                                {/* capacity */}
                                <Input full label="Capacidade" type="number"
                                    placeholder={`Capacidade: ${vehicle?.capacity}`}
                                    {...register('capacity')} error={errors.capacity?.message}
                                />
                            </div>
                        </div>




                    </div>
                    <div className="flex items-center gap-2 w-full">
                        <div className="flex flex-col gap-2 w-full">
                            {/* vehicle_photo */}
                            <Input type="file" multiple label="Foto do veículo"
                                {...register('vehicle_photo')} error={errors.vehicle_photo?.message}
                            />
                        </div>

                        {/* <span className="button-normal h-fit w-fit" onClick={handleClearFiles}><TrashIcon /> </span> */}
                    </div>

                    <div className="flex w-full flex-col gap-2">
                        <label htmlFor="">Informações adicionais (opcional)</label>
                        <textarea className="
                    border border-gray-300 rounded-md p-4"
                            placeholder={`Adicional: ${vehicle?.aditional}`}
                            {...register('aditional')}
                            id=""></textarea>
                        {errors?.aditional && (
                            <p className="bg-red-500 text-white px-1 border border-red-500 rounded-xl w-fit">
                                {errors.aditional?.message}
                            </p>
                        )}
                    </div>

                    <div className="w-[50%] mt-2">
                        <Button title="Salvar" type="submit" full />
                    </div>
                </div>
            </form>

        </section>

    )
}

export default EditVehicle;