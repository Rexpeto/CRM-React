import { useNavigate } from "react-router-dom";
import Formulario from "../components/Formulario";

const NuevoCliente = () => {
    const navigate = useNavigate();

    return ( 
        <>
            <div className="flex justify-between">
                <div>
                    <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
                    <p className="mt-3">Llena todos los campos para registrar nuevo cliente</p>
                </div>
                <div>
                    <button 
                        type="button" 
                        onClick={() => navigate(-1)} 
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold shadow text-white transition-colors duration-150"
                    >
                        Volver
                    </button>
                </div>

            </div>

            <div className="bg-white rounded-lg shadow md:w-3/4 mx-auto px-5 py-10 mt-7">
                <form>
                    <Formulario/>
                    <input 
                        type="submit" 
                        value="Agregar" 
                        className="mt-5 w-full bg-blue-600 hover:bg-blue-700 rounded-lg p-1 uppercase font-semibold text-lg text-white cursor-pointer transition-colors duration-150" 
                    />
                </form>
            </div>
        
        </>
    );
}

export default NuevoCliente;