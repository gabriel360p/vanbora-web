import { PasswordIcon, PhoneIcon, UserCircleIcon, UserIcon } from "@phosphor-icons/react";
import Button from "../../components/Button";
import { editDriver } from "../../services/DriverServices";
import { getUserEmail, getUserName, getUserPhone1, getUserPhone2 } from "../../contexts/user";
// import { useNavigate } from "react-router-dom";

function DriverProfile() {
    // const navigate = useNavigate();
    function handleEdit() {
        editDriver();
    }
    return (
        <section className="flex flex-col gap-5 w-screen px-4">

            <div className="flex items-center flex-col w-full">
                <div className="
                flex 
                flex-col
                justify-center items-center
                w-100 max-w-120 
                shadow-md border border-gray-300 rounded-md
                py-3 px-2 mt-2 gap-2
                ">
                    <div className="flex h-full w-40 items-start justify-center">
                        {/* <img src="" alt="foto-motorista" /> */}
                        <div className="w-25 h-25 bg-gray-800 rounded-full" ></div>
                    </div>
                    <p className="font-semibold md:text-[1.2rem]">Olá {getUserName()}!</p>

                </div>

            </div>
            <div
                className="
                flex 
                items-center justify-center 
                "
            >
                <div className="
                flex flex-col 
                justify-center items-center
                w-100 max-w-120 min-h-120 
                gap-5 px-2.5 lg:px-4 py-4
                border border-gray-300 rounded shadow-md 
                ">
                    <div className="
                    flex flex-col 
                    w-full
                    gap-5
                    ">
                        <div className="w-auto relative">
                            <input
                                placeholder="Nome completo"
                                type="text"
                                value={getUserName()}
                                className={`
                                    w-full    
                                    border border-gray-300 rounded-md
                                    p-2 ps-10                            
                            `}
                            />
                            <div className="flex cursor-pointer items-center justify-center w-8 h-8 absolute top-1.25 right-0 left-1">
                                <UserIcon size={18} className="" />
                            </div>
                        </div>
                        <div className="w-auto relative">
                            <input
                                placeholder="Email ou CPF"
                                type="text"
                                value={getUserEmail()}
                                className={`
                                    w-full    
                                    border border-gray-300 rounded-md
                                    p-2 ps-10                            
                            `}
                            />
                            <div className="flex cursor-pointer items-center justify-center w-8 h-8 absolute top-1.25 right-0 left-1">
                                <UserIcon size={18} className="" />
                            </div>
                        </div>
                        <div className="w-auto relative">
                            <input
                                placeholder="Alterar senha"
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
                        </div>

                        <div className="w-auto relative">
                            <input
                                placeholder="Número de telefone 1 (obrigatório)"
                                type="tel"
                                value={getUserPhone1()}
                                className={`
                                    w-full    
                                    border border-gray-300 rounded-md
                                    p-2 ps-10                            
                            `}
                            />
                            <div className="flex cursor-pointer items-center justify-center w-8 h-8 absolute top-1.25 right-0 left-1">
                                <PhoneIcon size={18} className="" />
                            </div>
                        </div>
                        <div className="w-auto relative">
                            <input
                                placeholder="Número de telefone 2 (opcional)"
                                type="tel"
                                value={getUserPhone2()}
                                className={`
                                    w-full    
                                    border border-gray-300 rounded-md
                                    p-2 ps-10                            
                            `}
                            />
                            <div className="flex cursor-pointer items-center justify-center w-8 h-8 absolute top-1.25 right-0 left-1">
                                <PhoneIcon size={18} className="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-full relative">
                        <label htmlFor="profile">Alterar foto de perfil</label>
                        <input
                            id="profile"
                            type="file"
                            className={`
                                    w-full    
                                    border border-gray-300 rounded-md
                                    p-2 ps-10                            
                            `}
                        />
                        <div className="flex cursor-pointer items-center justify-center w-8 h-8 absolute top-8.75 right-0 left-1">
                            <UserCircleIcon size={18} className="" />
                        </div>
                    </div>
                    <div className="w-[50%]">
                        <Button title="Salvar" type="button" full click={() => handleEdit()} />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default DriverProfile;