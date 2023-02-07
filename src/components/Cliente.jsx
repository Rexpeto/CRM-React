const Cliente = ({cliente}) => {
    const {nombre, email, telefono, empresa, id} = cliente;
    return (
        <tr>
            <td className="p-6 space-y-2">
                <p>{nombre}</p>
                <p className="text-gray-600">{empresa}</p>
            </td>
            <td className="p-6 space-y-2">
                <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Correo: </span>{email}</p>
                <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Tel: </span>{telefono}</p>
            </td>
            <td className="flex justify-center gap-4 p-6">
                <button type="button" className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs transition-colors duration-150">Editar</button>
                <button type="button" className="text-red-600 hover:text-red-700 uppercase font-bold text-xs transition-colors duration-150">Eliminar</button>
            </td>
        </tr>
    );
};

export default Cliente;
