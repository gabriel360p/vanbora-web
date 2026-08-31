import { ListIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import Button from "./Button";
import { logo } from "../helpers/MainAssets";

function Navbar() {
    const navigate = useNavigate();
    const [logging, setLogging] = useState<boolean>(false);

    const [navState, setNavState] = useState<boolean>(false);
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
                    <ol onClick={() => navigate('/')} className="items-navbar-desktop">
                        Inicio
                    </ol>
                    {/* <ol onClick={() => navigate('/')} className="items-navbar-desktop">
                        Encontrar viagem
                    </ol> */}
                    <ol onClick={() => navigate('/sobre')} className="items-navbar-desktop">
                        Sobre
                    </ol>
                    <ol className="items-navbar-desktop">
                        <Button title="Sou Motorista" outline type='button' click={() => navigate('/painel-motorista')} />
                    </ol>
                </li>
            </nav>

            {navState && (
                <div
                    className="
                    w-screen fixed
                    md:hidden
                    h-60
                    z-50 mt-17
                    bg-white shadow-md
                    "
                >
                    <li className="flex flex-col gap-4 px-4">
                        <ol onClick={() => navigate('/')} className="items-navbar-mobile">
                            Inicio
                        </ol>
                        {/* <ol onClick={() => navigate('/')} className="items-navbar-mobile">
                            Encontrar viagem
                        </ol> */}
                        <ol onClick={() => navigate('/sobre')} className="items-navbar-mobile">
                            Sobre
                        </ol>
                        <ol className="items-navbar-mobile">
                            <Button title="Sou Motorista" outline type='button' click={() => navigate('/painel-motorista')} />
                        </ol>
                    </li>
                </div>

            )}
        </>

    )
}

export default Navbar;