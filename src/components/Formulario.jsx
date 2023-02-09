const Formulario = ({cliente}) => {
    return ( 
        <>
            <div className="mb-4">
                <label htmlFor="nombre" className="text-gray-800">Nombre:</label>
                <input
                    type="text" 
                    id="nombre" 
                    name="nombre"
                    placeholder="Coloque el nombre"
                    className="mt-4 block w-full p-3 bg-gray-50 outline-none"
                    defaultValue={cliente?.nombre}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="empresa" className="text-gray-800">Empresa del Cliente:</label>
                <input 
                    type="text" 
                    id="empresa" 
                    name="empresa"
                    placeholder="Coloque la empresa"
                    className="mt-4 block w-full p-3 bg-gray-50 outline-none"
                    defaultValue={cliente?.empresa}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="text-gray-800">Correo de Cliente:</label>
                <input 
                    type="email" 
                    id="email"
                    name="email" 
                    placeholder="Correo electronico"
                    className="mt-4 block w-full p-3 bg-gray-50 outline-none"
                    defaultValue={cliente?.email}
                />
            </div>
            
            <div className="mb-4">
                <label htmlFor="tel" className="text-gray-800">Teléfono de Cliente:</label>
                <input 
                    type="tel" 
                    id="tel" 
                    name="telefono"
                    placeholder="Correo electronico"
                    className="mt-4 block w-full p-3 bg-gray-50 outline-none"
                    defaultValue={cliente?.telefono}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="notas" className="text-gray-800">Notas:</label>
                <textarea 
                    id="notas"
                    name="notas"
                    as="textarea"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self outline-none"
                    placeholder="Notas de Cliente"
                    defaultValue={cliente?.notas}
                ></textarea>
            </div>
        </>
    );
}

export default Formulario;