import { ImageIcon, LockIcon, PhoneIcon, UserIcon } from "@phosphor-icons/react";
import Button from "../../components/Button";
import { editDriver } from "../../services/DriverServices";
import { useUser } from "../../contexts/userContext";
import Input from "../../components/Input";

// import { useNavigate } from "react-router-dom";

function DriverProfile() {
    // const navigate = useNavigate();
    const { user } = useUser();
    function handleEdit() {
        editDriver();
    }
    return (
        <section className="
        flex flex-col lg:flex-row 
        w-screen
        md:justify-center 
        gap-5 px-4 mt-2
        ">

            <div className="flex items-center flex-col ">
                <div className="
                flex 
                flex-col
                justify-center items-center
                w-80  
                shadow-md border border-gray-300 rounded-md
                py-3 px-2 gap-2
                ">
                    <div className="flex h-full w-40 items-start justify-center">
                        {/* <img src="" alt="foto-motorista" /> */}
                        <div className="w-25 h-25 bg-gray-800 rounded-full" ></div>
                    </div>
                    <p className="font-semibold md:text-[1.2rem]">Olá {user.name}!</p>
                    <hr className="text-gray-300 w-full" />
                    <div className="flex w-full flex-col gap-4">
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.cpf}</p>
                        <p>{user.phone1}</p>
                        <p>{user.phone2}</p>
                        {/* <p>{user.name}</p>
                        <p>{user.name}</p> */}
                    </div>
                </div>

            </div>

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
                        <Input type="text" placeholder="Nome Completo" />
                        <Input type="email" placeholder="Email" />
                        <Input type="number" placeholder="CPF" />

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
                        <Input type="tel" placeholder="Telefone principal" />
                        <Input type="tel" placeholder="Telefone secundário" />
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
                            <Input type="password" placeholder="Alterar Senha" full />
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
                            <Input type="file" full />
                        </div>
                        {/* <Input type="tel" placeholder="Telefone secundário" /> */}
                    </div>
                </div>
                <div className="flex justify-center md:justify-end w-full">
                    <Button type="submit" title="Salvar Alterações" />
                </div>
            </div>






































































            {/* <div
                className="
                flex 
                w-full
                items-center justify-center 
                "
            >
                <div className="
                flex flex-col 
                justify-center items-center
                w-full max-w-300 min-h-120 
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

                                onChange={(e) => e.target.value}
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
                                placeholder="Email"
                                type="text"

                                onChange={(e) => e.target.value}
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
                                placeholder="CPF"
                                type="text"

                                onChange={(e) => e.target.value}
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

                                onChange={(e) => e.target.value}
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

                                onChange={(e) => e.target.value}
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
            </div> */}

        </section>
    )
}

export default DriverProfile;