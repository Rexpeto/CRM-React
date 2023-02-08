import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Formulario from "../components/Formulario";
import { agregarClientes } from "../data/clientes";
import 'react-toastify/dist/ReactToastify.css'

export const action = async ({request}) => {
    const formData = await request.formData();
    const datos = Object.fromEntries(formData);

    const email = formData.get('email');

    //? Validación
    const errores = [];
    if(Object.values(datos).includes('')) {
        errores.push('Todos los campos son obligatorios');
    }

    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

    if(!regex.test(email)) {
        errores.push('El email no es válido');
    }

    //? Retornar errores
    if(Object.keys(errores).length) {
        return errores;
    }

    await agregarClientes(datos);

    return redirect('/');
}

const NuevoCliente = () => {
    const errores = useActionData();
    const navigate = useNavigate();

    if(errores?.length) {
        console.log(errores)
        errores.map(error => {
            toast.error(error);
        })
    }
    
    return ( 
        <>
            <ToastContainer/>
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
                <Form method="post" action="/clientes/nuevo">
                    <Formulario/>
                    <input 
                        type="submit" 
                        value="Agregar" 
                        className="mt-5 w-full bg-blue-600 hover:bg-blue-700 rounded-lg p-1 uppercase font-semibold text-lg text-white cursor-pointer transition-colors duration-150" 
                    />
                </Form>
            </div>
        
        </>
    );
}

export default NuevoCliente;