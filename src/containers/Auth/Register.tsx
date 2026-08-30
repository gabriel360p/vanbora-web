import { PasswordIcon, PhoneIcon, UserCircleIcon, UserIcon } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

// import { useState } from "react";
import { logo } from "../../helpers/MainAssets";
import { register as cadastrar } from "../../services/AuthServices";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterValidateSchema } from "../../schemas/RegisterFormSchema";
import { useForm } from "react-hook-form";
import type RegisterInterface from "../../types/RegisterFormInterface";

function Register() {
    const navigate = useNavigate();

    async function handleRegister(dataRegister: RegisterInterface) {
        if (await cadastrar(dataRegister)) navigate('/login')
    }


    const { register, handleSubmit, formState: { errors } } = useForm<RegisterInterface>({
        resolver: yupResolver(RegisterValidateSchema),
    })
    return (
        <>
            <section
                className="
                flex 
                items-center justify-center 
                w-screen 
                px-5 mt-18 xl:mt-10
                "
            >
                <div className="
                flex flex-col 
                justify-center items-center
                w-100 max-w-120 min-h-120 
                gap-2 px-2.5 lg:px-4 py-4
                border border-gray-500/20 rounded shadow-md 
                ">
                    <div className="p-4">
                        <img src={logo} alt="" className="object-cover" />
                    </div>
                    <form onSubmit={handleSubmit((dataRegister: RegisterInterface) => {
                        console.log(dataRegister)
                        handleRegister(dataRegister)
                    })}>
                        <div className="
                    flex flex-col 
                    w-full
                    gap-4
                    ">
                            <div className="w-auto relative">
                                <input
                                    {...register('email')}
                                    placeholder="Email"
                                    type="email"
                                    className={`
                                    w-full    
                                    border border-gray-300 rounded-md
                                    p-2 ps-10                            
                            `}
                                />
                                <div className="flex cursor-pointer items-center justify-center w-8 h-8 absolute top-1.25 right-0 left-1">
                                    <UserIcon size={18} className="" />
                                </div>
                                {errors?.email && (
                                    <p className="bg-red-500 text-white px-1.5 mt-1 border border-red-500 rounded-xl w-fit">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>
                            <div className="w-auto relative">
                                <input
                                    {...register('name')}
                                    placeholder="Nome completo"
                                    type="text"
                                    className={`
                                    w-full    
                                    border border-gray-300 rounded-md
                                    p-2 ps-10                            
                            `}
                                />
                                <div className="flex cursor-pointer items-center justify-center w-8 h-8 absolute top-1.25 right-0 left-1">
                                    <UserIcon size={18} className="" />
                                </div>
                                {errors?.name && (
                                    <p className="bg-red-500 text-white px-1.5 mt-1 border border-red-500 rounded-xl w-fit">
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>


                            <div className="w-auto relative">
                                <input
                                    {...register('password')}
                                    placeholder="Senha de usuário"
                                    type="password"
                                    className={`
                                    w-full    
                                    border border-gray-300 rounded-md
                                    p-2 ps-10                            
                            `}
                                />
                                <div className="flex cursor-pointer items-center justify-center w-8 h-8 absolute top-1.25 right-0 left-1">
                                    <PasswordIcon size={18} className="" />
                                </div>
                                {errors?.password && (
                                    <p className="bg-red-500 text-white px-1.5 mt-1 border border-red-500 rounded-xl w-fit">
                                        {errors?.password.message}
                                    </p>
                                )}
                            </div>
                            <div className="w-auto relative">
                                <input
                                    {...register('cpf')}
                                    placeholder="CPF (Apenas números)"
                                    type="text"
                                    className={`
                                    w-full    
                                    border border-gray-300 rounded-md
                                    p-2 ps-10                            
                            `}
                                />
                                <div className="flex cursor-pointer items-center justify-center w-8 h-8 absolute top-1.25 right-0 left-1">
                                    <UserCircleIcon size={18} className="" />
                                </div>
                                {errors?.cpf && (
                                    <p className="bg-red-500 text-white px-1.5 mt-1 border border-red-500 rounded-xl w-fit">

                                        {errors?.cpf.message}
                                    </p>
                                )}
                            </div>
                            <div className="w-auto relative">
                                <input
                                    placeholder="Número de telefone 1 (obrigatório)"
                                    type="tel"
                                    {...register('phone1')}
                                    className={`
                                    w-full    
                                    border border-gray-300 rounded-md
                                    p-2 ps-10                            
                            `}
                                />
                                <div className="flex cursor-pointer items-center justify-center w-8 h-8 absolute top-1.25 right-0 left-1">
                                    <PhoneIcon size={18} className="" />
                                </div>
                                {errors?.phone1 && (
                                    <p className="bg-red-500 text-white px-1.5 mt-1 border border-red-500 rounded-xl w-fit">
                                        {errors.phone1.message}
                                    </p>
                                )}
                            </div>
                            <div className="w-auto relative">
                                <input
                                    placeholder="Número de telefone 2 (opcional)"
                                    type="tel"
                                    {...register('phone2')}
                                    className={`
                                    w-full    
                                    border border-gray-300 rounded-md
                                    p-2 ps-10                            
                            `}
                                />
                                <div className="flex cursor-pointer items-center justify-center w-8 h-8 absolute top-1.25 right-0 left-1">
                                    <PhoneIcon size={18} className="" />
                                </div>
                                {errors.phone2 && (
                                    <p className="bg-red-500 text-white px-1.5 mt-1 border border-red-500 rounded-xl w-fit">
                                        {errors.phone2.message}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col gap-1+ mt-2 w-full relative">
                            <label htmlFor="profile">Foto de Perfil</label>
                            <input
                                {...register('avatar')}
                                id="profile"
                                type="file"
                                className={`
                                    w-full    
                                    border border-gray-300 rounded-md
                                    p-2 ps-10                            
                            `}
                            />
                            <div className="flex cursor-pointer items-center justify-center w-8 h-8 absolute top-7.5 right-0 left-1">
                                <UserCircleIcon size={18} className="" />
                            </div>
                            {errors.avatar && (
                                <p className="bg-red-500 text-white px-1.5 mt-1 border border-red-500 rounded-xl w-fit">
                                    {errors.avatar.message}
                                </p>
                            )}
                        </div>

                        <div className="flex w-full justify-center items-center mt-4">
                            <Button title="Salvar" type="submit" full />
                        </div>
                    </form>

                    <div>
                        <p>Já é cadastrado? <span className="font-semibold cursor-pointer" onClick={() => navigate('/login')}>entrar</span></p>
                    </div>
                </div>
            </section >
        </>
    )
}
export default Register;