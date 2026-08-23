import Button from "./Button";
import { useNavigate } from "react-router-dom";

function VehicleRow() {
    const navigate = useNavigate()

    return (
        <>
            <div className="
                    flex flex-col
                    w-full max-w-80
                    md:justify-between
                    gap-4 border border-gray-300 rounded-md shadow-md p-4
                     ">
                <div className="
                    flex 
                    w-full
                    ">
                    <p className="font-bold">
                        Mercedes Sprinter
                    </p>
                </div>
                <div className="flex w-full">
                    <div className="
                    flex
                    w-full max-w-45
                    ">
                        {/* <img src="" alt="foto-veiculo" /> */}
                        <div className="w-full h-30 bg-gray-800 rounded-md" ></div>
                    </div>

                    <div className="
                    flex flex-col 
                    justify-center
                    gap-1 ps-2.5 md:ps-4
                    ">
                        <p className="text-[1rem] md:text-lg font-semibold">ABC - 1234</p>
                        <p className="text-[1rem] md:text-lg">16 lugares</p>
                        <Button type="button" title="Editar" outline />

                    </div>

                </div>
            </div>
        </>

    )
}

export default VehicleRow;