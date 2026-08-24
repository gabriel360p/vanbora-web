import { EyeIcon, UserIcon } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

import { useState } from "react";
import { logo } from "../../helpers/MainAssets";
import { login } from "../../services/AuthServices";

function Login() {
    const [eye, setEye] = useState<boolean>(false);
    const navigate = useNavigate();

    function handleLogin() {
        login()
        navigate('/painel-motorista')
    }

    function handleEye() {
        setEye(!eye)
    }

    return (
        <>
            <section
                className="
                flex 
                items-center justify-center 
                w-screen 
                px-5 mt-15 md:mt-20
                "
            >
                <div className="
                flex flex-col 
                justify-center items-center
                w-100 max-w-120  min-h-120 
                gap-5 px-2.5 lg:px-4 py-4
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
                                placeholder="Email ou CPF"
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
                            <div className="flex cursor-pointer items-center justify-center w-8 h-8 absolute top-1.25 right-0 left-1">
                                <EyeIcon size={18} className="" onClick={() => handleEye()} />
                            </div>
                        </div>

                    </div>
                    <div className="w-[50%] mt-4">
                        <Button title="Entrar" type="button" full click={() => handleLogin()} />
                    </div>
                    <div>
                        <p>Ainda não é cadastrado? <span className="font-semibold cursor-pointer" onClick={() => navigate('/cadastro')}>cadastrar-se</span></p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Login;