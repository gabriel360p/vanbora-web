import { EnvelopeIcon, ImageIcon, LockIcon, PhoneIcon, SpinnerIcon, UserIcon } from "@phosphor-icons/react";
import Button from "../../components/Button";
import { editDriver } from "../../services/DriverServices";
import { useUser } from "../../contexts/userContext";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { EditUserFormSchema } from "../../schemas/EditUserFormSchema";
import type EditUserFormInterface from "../../types/EditUserFormInterface";
import { useState } from "react";

function DriverProfile() {
    // const navigate = useNavigate();
    const { user, refreshUser } = useUser();
    const [load, setLoad] = useState<boolean>(false);
    // console.log(user)

    const { register, formState: { errors }, handleSubmit } = useForm<EditUserFormInterface>({
        resolver: yupResolver(EditUserFormSchema)
    });

    async function handleEdit(data: EditUserFormInterface) {
        setLoad(true);
        await editDriver(data);
        refreshUser();
        setLoad(false);
    }

    return (
        <section className="
        flex flex-col lg:flex-row 
        w-screen
        md:justify-center 
        gap-5 px-4 mt-2
        ">
            {load && (
                <div className="flex fixed w-screen h-screen justify-center items-center">
                    < span className="animate-spin" > <SpinnerIcon size={32} className="text-primary" /> </ span>
                </div >
            )
            }
            <div className="flex items-center flex-col ">
                <div className="
                flex 
                flex-col
                justify-center items-center
                w-full lg:max-w-90  
                shadow-md border border-gray-300 rounded-md
                py-3 px-2 gap-2
                ">
                    <div className="flex h-full w-40 items-start justify-center">
                        <img src={user.photoUrl} alt="foto-motorista" className="object-cover w-25 h-25 bg-gray-800 rounded-full" />
                    </div>
                    <p className="font-semibold md:text-[1.2rem]">Olá {user.name}!</p>
                    <hr className="text-gray-300 w-full" />
                    <div className="flex w-full flex-col gap-4">
                        <div className="
                        flex
                        items-center
                        gap-2
                        ">
                            <UserIcon />
                            <p>{user.name}</p>
                        </div>
                        <div className="
                        flex
                        items-center
                        gap-2
                        ">
                            <UserIcon />
                            <p>{user.cpf}</p>
                        </div>
                        <hr className="text-gray-300 w-full" />
                        <div className="
                        flex
                        items-center
                        gap-2
                        ">
                            <EnvelopeIcon />
                            <p>{user.email}</p>
                        </div>
                        <div className="
                        flex
                        items-center
                        gap-2
                        ">
                            <PhoneIcon />
                            <p>{user.phone1}</p>
                        </div>
                        <div className="
                        flex
                        items-center
                        gap-2
                        ">
                            <PhoneIcon />
                            <p>{user.phone2}</p>
                        </div>
                    </div>
                </div>

            </div>

            <form encType="multipart/form-data" onSubmit={handleSubmit((data: EditUserFormInterface) => handleEdit(data))}>

                <div className="
            flex flex-col gap-4 md:gap-6
            ">
                    <div className="
                flex flex-col 
                gap-2 py-5 px-3
                bg-white border border-gray-300 rounded-md shadow-md
                 ">
                        <div className="flex gap-2 items-center">
                            <UserIcon size={20} />
                            <p>Dados Pessoais</p>
                        </div>

                        <hr className="text-gray-300 w-full" />

                        <div className="flex flex-col lg:flex-row gap-4">
                            <Input type="text" placeholder="Nome Completo" {...register('name')} error={errors.name?.message} />
                            <Input type="email" placeholder="Email" {...register('email')} error={errors.email?.message} />
                            <Input type="number" placeholder="CPF" {...register('cpf')} error={errors.cpf?.message} />

                        </div>
                    </div>

                    <div className="
                flex flex-col 
                gap-2 py-5 px-3
                bg-white border border-gray-300 rounded-md shadow-md
                 ">
                        <div className="flex gap-2 items-center">
                            <PhoneIcon size={20} />
                            <p>Contato</p>
                        </div>

                        <hr className="text-gray-300 w-full" />

                        <div className="flex flex-col lg:flex-row gap-4">
                            <Input type="tel" placeholder="Telefone principal" {...register('phone1')} error={errors.phone1?.message} />
                            <Input type="tel" placeholder="Telefone secundário" {...register('phone2')} error={errors.phone2?.message} />
                        </div>
                    </div>

                    <div className="
                flex flex-col 
                gap-2 py-5 px-3
                bg-white border border-gray-300 rounded-md shadow-md
                 ">
                        <div className="flex gap-2 items-center">
                            <LockIcon size={20} />
                            <p>Segurança</p>
                        </div>

                        <hr className="text-gray-300 w-full" />

                        <div className="flex flex-col lg:flex-row gap-4">
                            <div className="w-full max-w-100">
                                <Input type="password" placeholder="Alterar Senha" full {...register('password')} error={errors.password?.message} />
                            </div>
                            {/* <Input type="tel" placeholder="Telefone secundário" /> */}
                        </div>
                    </div>
                    <div className="
                flex flex-col 
                gap-2 py-5 px-3
                bg-white border border-gray-300 rounded-md shadow-md
                 ">
                        <div className="flex gap-2 items-center">
                            <ImageIcon size={20} />
                            <p>Foto de perfil</p>
                        </div>

                        <hr className="text-gray-300 w-full" />

                        <div className="flex flex-col lg:flex-row gap-4">
                            <div className="w-full max-w-100">
                                <Input type="file" full {...register('avatar')} error={errors.avatar?.message} />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-end w-full">
                        <Button type="submit" title="Salvar Alterações" />
                    </div>
                </div>

            </form>

        </section >
    )
}

export default DriverProfile;