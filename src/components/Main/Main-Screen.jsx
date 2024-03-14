import { useState } from "react";
import "./Main-Screen.css";
import Sidebar from "../Sidebar/Sidebar";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Products from "../../Pages/Products/Products";
import Orders from "../../Pages/Orders/Orders";

const Main = () => {
    const [activeScreen, setActiveScreen] = useState("Dashboard");

    const handleItemClick = (screenName) => {
        setActiveScreen(screenName);
    };

    return (
        <div className="container">
            <div className="sidebar-container">
                <Sidebar onItemClick={handleItemClick} />
            </div>

            <div className="main-container">
                {activeScreen === "Products" ? (
                    <Products />
                ) : activeScreen === "Orders" ? (
                    <Orders />
                ) : (
                    <Dashboard />
                )}
            </div>
        </div>
    );
};

export default Main;
