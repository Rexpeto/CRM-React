import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();

    return ( 
        <div className="space-y-8">
            <h1 className="text-center text-6xl font-semibold mt-20 text-blue-900">CRM - Clientes</h1>
            <p className="text-center">Hubo un error</p>
            <p className="text-center">{error?.statusText || error?.message || error?.axiosError?.message}</p>
        </div>
    );
}

export default Error;