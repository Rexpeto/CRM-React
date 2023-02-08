import axios from "axios";

export const obtenerClientes = async () => {
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/clientes`);
        const resultado = await respuesta.json();
        return resultado;
    } catch (error) {
        console.log(error);
    }
}

export const agregarClientes = async datos => {
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/clientes`, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Types': 'application/json'
            }
        });

        await respuesta.json();

    } catch (error) {
        console.log(error)
    }
}