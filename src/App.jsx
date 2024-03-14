import Sidebar from "./components/Sidebar/Sidebar";
import Main_Screen from "./components/Main/Main-Screen";
import "./App.css";
import { useState } from "react";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Products from "./Pages/Products/Products";
import Orders from "./Pages/Orders/Orders";

function App() {
    // const [activeScreen, setActiveScreen] = useState("Dashboard");

    // const handleItemClick = (screenName) => {
    //     setActiveScreen(screenName);
    // };

    return <Main_Screen />;
    // {
    //     /* <div className="container">
    //        {/* <div className="sidebar-container">
    //         <Sidebar />
    //        </div>
    //     <div className="main-container">

    //          {activeScreen === "Products" ? (
    //             <Products>{console.log("inside product tag")}</Products>
    //         ) : activeScreen === "Orders" ? (
    //             <Orders>{console.log("inside order tag")}</Orders>
    //         ) : (
    //             <Dashboard>{console.log("inside dashboard tag")}</Dashboard>
    //         )}

    //         {activeScreen === "Products" && <Products />}
    //         {activeScreen === "Orders" && <Orders />}
    //     </div>
    // </div>*/
    // }
}

export default App;
