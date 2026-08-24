import { PasswordIcon, PhoneIcon, UserCircleIcon, UserIcon } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

// import { useState } from "react";
import { logo } from "../../helpers/MainAssets";
import { register } from "../../services/AuthServices";

function Register() {
    const navigate = useNavigate();

    function handleRegister() {
        register()
        navigate('/login')
    }


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
                    <div className="
                    flex flex-col 
                    w-full
                    gap-5
                    ">
                        <div className="w-auto relative">
                            <input
                                placeholder="Nome completo"
                                type="text"
                                className={`
                                    w-full    
                                    border border-gray-300 rounded-md
                                    p-2 ps-10                            
                            `}
                            />
                            <div className="flex cursor-pointer items-center justify-center w-8 h-8 absolute top-[5px] right-0 left-1">
                                <UserIcon size={18} className="" />
                            </div>
                        </div>

                        <div className="w-auto relative">
                            <input
                                placeholder="Email ou CPF"
                                type="text"
                                className={`
                                    w-full    
                                    border border-gray-300 rounded-md
                                    p-2 ps-10                            
                            `}
                            />
                            <div className="flex cursor-pointer items-center justify-center w-8 h-8 absolute top-[5px] right-0 left-1">
                                <UserIcon size={18} className="" />
                            </div>
                        </div>
                        <div className="w-auto relative">
                            <input
                                placeholder="Senha de usuário"
                                type="password"
                                className={`
                                    w-full    
                                    border border-gray-300 rounded-md
                                    p-2 ps-10                            
                            `}
                            />
                            <div className="flex cursor-pointer items-center justify-center w-8 h-8 absolute top-[5px] right-0 left-1">
                                <PasswordIcon size={18} className="" />
                            </div>
                        </div>

                        <div className="w-auto relative">
                            <input
                                placeholder="Número de telefone 1 (obrigatório)"
                                type="tel"
                                className={`
                                    w-full    
                                    border border-gray-300 rounded-md
                                    p-2 ps-10                            
                            `}
                            />
                            <div className="flex cursor-pointer items-center justify-center w-8 h-8 absolute top-[5px] right-0 left-1">
                                <PhoneIcon size={18} className="" />
                            </div>
                        </div>
                        <div className="w-auto relative">
                            <input
                                placeholder="Número de telefone 2 (opcional)"
                                type="tel"
                                className={`
                                    w-full    
                                    border border-gray-300 rounded-md
                                    p-2 ps-10                            
                            `}
                            />
                            <div className="flex cursor-pointer items-center justify-center w-8 h-8 absolute top-[5px] right-0 left-1">
                                <PhoneIcon size={18} className="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-full relative">
                        <label htmlFor="profile">Foto de Perfil</label>
                        <input
                            id="profile"
                            type="file"
                            className={`
                                    w-full    
                                    border border-gray-300 rounded-md
                                    p-2 ps-10                            
                            `}
                        />
                        <div className="flex cursor-pointer items-center justify-center w-8 h-8 absolute top-[35px] right-0 left-1">
                            <UserCircleIcon size={18} className="" />
                        </div>
                    </div>
                    <div className="w-[50%] mt-4">
                        <Button title="Salvar" type="button" full click={() => handleRegister()} />
                    </div>
                    <div>
                        <p>Já é cadastrado? <span className="font-semibold cursor-pointer" onClick={() => navigate('/login')}>entrar</span></p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Register;