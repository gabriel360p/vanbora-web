import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function Error404() {
    const navigate = useNavigate()
    return (

        <div className="flex flex-col w-screen h-screen items-center justify-center gap-5">
            <p className="text-4xl font-bold">404</p>
            <p className="text-xl font-semibold">Recurso não encontrado</p>
            <Button type="button" outline title="Página anterior" click={() => navigate(-1)} />
        </div>
    )
}

export default Error404;