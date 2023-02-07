const Formulario = ({cliente}) => {
    return ( 
        <>
            <div className="mb-4">
                <label htmlFor="nombre" className="text-gray-800">Nombre:</label>
                <input 
                    type="text" 
                    id="nombre" 
                    placeholder="Coloque el nombre"
                    className="mt-4 block w-full p-3 bg-gray-50"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="empresa" className="text-gray-800">Empresa del Cliente:</label>
                <input 
                    type="text" 
                    id="empresa" 
                    placeholder="Coloque la empresa"
                    className="mt-4 block w-full p-3 bg-gray-50"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="text-gray-800">Correo de Cliente:</label>
                <input 
                    type="email" 
                    id="email" 
                    placeholder="Correo electronico"
                    className="mt-4 block w-full p-3 bg-gray-50"
                />
            </div>
            
            <div className="mb-4">
                <label htmlFor="tel" className="text-gray-800">Teléfono de Cliente:</label>
                <input 
                    type="tel" 
                    id="tel" 
                    placeholder="Correo electronico"
                    className="mt-4 block w-full p-3 bg-gray-50"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="notas" className="text-gray-800">Notas:</label>
                <textarea 
                    id="notas"
                    as="textarea"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
                    placeholder="Notas de Cliente"
                ></textarea>
            </div>
        </>
    );
}

export default Formulario;