import { ListIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { logo } from "../helpers/MainAssets";
import { logout } from '../services/AuthServices';

function NavbarDriverboard() {
    const navigate = useNavigate();
    const [navState, setNavState] = useState<boolean>(false);

    async function handleLogout() {
        await logout();
        navigate('/sair');
    }
    function handleNavControl() {
        setNavState(!navState);
        setTimeout(() => {
            setNavState(false);
        }, 60000)
    }

    return (

        <>
            <nav className="
            flex 
            justify-between items-center
            w-screen h-18 fixed 
            px-4 z-50 
            bg-white shadow-md
            ">
                <img onClick={() => navigate('/')} src={logo} alt="vanbora-logotipo" className="cursor-pointer object-cover h-11 lg:h-12" />
                <ListIcon size={32} className="md:hidden cursor-pointer interactive-animation" onClick={handleNavControl} />

                <li className="hidden md:flex flex-row gap-4 items-center">
                    <ol onClick={() => navigate('/painel-motorista')} className="items-navbar-desktop">
                        Inicio
                    </ol>
                    <ol onClick={() => navigate('/minhas-viagens')} className="items-navbar-desktop">
                        Minhas viagens
                    </ol>
                    {/* <ol onClick={() => navigate('/meus-veiculos')} className="items-navbar-desktop">
                        Meus veiculos
                    </ol> */}
                    <ol onClick={() => navigate('/perfil-motorista')} className="items-navbar-desktop">
                        Meu perfil
                    </ol>
                    <ol onClick={() => navigate('/ajuda-motorista')} className="items-navbar-desktop">
                        Ajuda
                    </ol>
                    <ol onClick={() => { handleLogout() }} className="items-navbar-desktop">
                        Sair
                    </ol>
                </li>
            </nav>

            {navState && (
                <div
                    className="
                    w-screen fixed
                    md:hidden
                    h-68
                    z-50 mt-17 pt-2
                    bg-white shadow-md
                    "
                >
                    <li className="flex flex-col gap-4 px-4">
                        <ol onClick={() => navigate('/painel-motorista')} className="items-navbar-mobile">
                            Inicio
                        </ol>
                        <ol onClick={() => navigate('/minhas-viagens')} className="items-navbar-mobile">
                            Minhas viagens
                        </ol>
                        {/* <ol onClick={() => navigate('/meus-veiculos')} className="items-navbar-mobile">
                            Meus veiculos
                        </ol> */}
                        <ol onClick={() => navigate('/perfil-motorista')} className="items-navbar-mobile">
                            Meu perfil
                        </ol>
                        <ol onClick={() => navigate('/ajuda-motorista')} className="items-navbar-mobile">
                            Ajuda
                        </ol>
                        <ol onClick={() => handleLogout()} className="items-navbar-mobile">
                            Sair
                        </ol>
                    </li>
                </div>

            )}
        </>

    )
}

export default NavbarDriverboard;