import { ListIcon } from "@phosphor-icons/react/dist/ssr";
import { logo } from "../helpers/MainAssets";
import { HouseIcon, RoadHorizonIcon, UserIcon, VanIcon } from "@phosphor-icons/react";

function DriverboardSidebar() {
    return (
        <aside className="
        flex flex-col 
        w-75
        z-99 
        shadow-md bg-blue-950 text-white
        ">
            <div className="flex flex-col w-full h-full">
                <div className="flex w-full justify-between">
                    {/* <img src={logo} className="object-cover" alt="vanbora-logotipo" /> */}
                    <ListIcon size={22} />
                </div>
                <div className="mt-8" />
                <div className="flex">
                    <li>
                        <ol className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <HouseIcon size={20} />
                                <p>Inicio</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <RoadHorizonIcon size={20} />
                                <p>Minhas rotas</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <VanIcon size={20} />
                                <p>Meus veículos</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <UserIcon size={20} />
                                <p>Minhas informações</p>
                            </div>
                        </ol>
                    </li>
                </div>
            </div>
        </aside>
    )
}

export default DriverboardSidebar;