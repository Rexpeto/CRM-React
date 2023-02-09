import axios from "axios";

export const obtenerClientes = async () => {
    try {
        const respuesta = await axios(`${import.meta.env.VITE_API_URL}/clientes`);
        return respuesta.data;
    } catch (error) {
        console.log(error);
    }
}

export const obtenerClientesId = async id => {
    try {
        const respuesta = await axios(`${import.meta.env.VITE_API_URL}/clientes/${id}`);
        return respuesta.data;
    } catch (error) {
        console.log(error);
    }
}

export const agregarClientes = async datos => {
    try {
        const respuesta = await axios({
            method: 'POST',
            url: `${import.meta.env.VITE_API_URL}/clientes`,
            data: datos
        });

        return respuesta.data
    } catch (error) {
        console.log(error)
    }
}

export const editarCliente = async (id, datos) => {
    try {
        const respuesta = await axios.put(`${import.meta.env.VITE_API_URL}/clientes/${id}`, datos);
        return respuesta.data;
    } catch (error) {
        console.log(error);
    }
}