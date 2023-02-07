import { Link, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
    const location = useLocation();

    return ( 
        <div className="md:flex md:min-h-screen">
            <div className="md:w-1/5 bg-blue-900 px-5 py-10">
                <Link to="/">
                    <h2 className="text-3xl font-black text-center text-white">CRM - Cliente</h2>
                </Link>

                <nav className="mt-10">
                    <Link to="/clientes/nuevo" className={`text-lg block mt-2  hover:text-blue-100 hover:bg-blue-800 py-2 px-3 rounded-lg ${location.pathname === '/clientes/nuevo' ? 'text-blue-100 bg-blue-800' : 'text-white'} transition-all duration-150`}>Nuevo Cliente</Link>
                </nav>
            </div>
            <main className="md:w-full p-10 md:h-screen overflow-scroll">
                <Outlet/>
            </main>
        </div>
    );
}

export default Layout;