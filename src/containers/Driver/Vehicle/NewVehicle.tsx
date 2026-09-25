import { useForm } from "react-hook-form";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import type { RegisterDriverInterface } from "../../../types/RegisterDriverInterface";
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterDriverValidateSchema } from "../../../schemas/RegisterDriverFormSchema";
import { newVehicle } from "../../../services/VehicleServices";
import { SpinnerIcon, TrashIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewVehicle() {
    const { register, resetField, formState: { errors }, handleSubmit } = useForm<RegisterDriverInterface>({
        resolver: yupResolver(RegisterDriverValidateSchema)
    });
    const [load, setLoad] = useState<boolean>(false);
    const navigate = useNavigate();

    function handleClearFiles() {
        resetField('vehicle_photo');

    }

    function handleRegisterDriver(vehicleData: RegisterDriverInterface) {
        setLoad(true)
        newVehicle(vehicleData!);
        setLoad(false)
        navigate('/painel-motorista');
    }

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
                <h1 className="font-semibold text-xl my-5">Novo veículo</h1>
            </div>

            <form encType="multipart/form-data" className="flex w-full justify-center" onSubmit={handleSubmit((data) => {
                handleRegisterDriver(data)
            })}>
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
                                <Input full label="Modelo" type="text" placeholder="Modelo" {...register('model')} error={errors.model?.message} />
                            </div>
                            <div className=" flex flex-col gap-2 w-full">
                                {/* license_plate */}
                                <Input full label="Placa" type="text" placeholder="Placa"  {...register('plate')} error={errors.plate?.message} />
                            </div>

                        </div>
                        <div className="flex flex-col md:flex-row md:gap-2">
                            <div className="flex flex-col gap-2 w-full">
                                {/*cor  */}
                                <Input full label="Cor" type="text" placeholder="Cor" {...register('color')} error={errors.color?.message} />
                            </div>
                            <div className=" flex flex-col gap-2 w-full">
                                {/* capacity */}
                                <Input full label="Capacidade" type="number" placeholder="Capacidade" {...register('capacity')} error={errors.capacity?.message} />
                            </div>
                        </div>




                    </div>
                    <div className="flex items-center gap-2 w-full">
                        <div className="flex flex-col gap-2 w-full">
                            {/* vehicle_photo */}
                            <Input type="file" multiple label="Foto do veículo"  {...register('vehicle_photo')} error={errors.vehicle_photo?.message} />
                        </div>

                        <span className="button-normal h-fit w-fit" onClick={handleClearFiles}><TrashIcon /> </span>
                    </div>

                    <div className="flex w-full flex-col gap-2">
                        <label htmlFor="">Informações adicionais (opcional)</label>
                        <textarea className="
                    border border-gray-300 rounded-md p-4" placeholder="Informações adicionais (opcional)"
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
export default NewVehicle;

// vehicles
// ├── id
// ├── driver_id
// ├── model
// ├── plate
// ├── capacity
// └── status