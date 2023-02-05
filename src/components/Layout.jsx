import { Outlet } from "react-router";

const Layout = () => {
    return ( 
        <div>
            <h1 className="text-6xl font-bold text-center">CRM - React</h1>
            <Outlet />
        </div>
    );
}

export default Layout;