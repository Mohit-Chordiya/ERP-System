import React from "react";
import "./Sidebar.css";
import dashboard from "../../assets/dashboard.png";
import product from "../../assets/product.png";
import order from "../../assets/order.png";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="side-link">
                <img className="dashboard" src={dashboard} />
                <p>Dashboard</p>
            </div>
            <div className="side-link">
                <img className="product" src={product} />
                <p>Products</p>
            </div>
            <div className="side-link">
                <img className="order" src={order} />
                <p>Orders</p>
            </div>
        </div>
    );
};

export default Sidebar;
