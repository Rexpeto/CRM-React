export const obtenerClientes = async () => {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/clientes`);
    const resultado = await respuesta.json();

    return resultado;
}