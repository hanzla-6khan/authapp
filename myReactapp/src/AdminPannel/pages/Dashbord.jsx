
import { Outlet } from 'react-router-dom';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";



const Dashboard = () => {
    return (
        <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Header />
                    <Outlet />
                </div>
            </div>
        </div>

    );
};

export default Dashboard;
