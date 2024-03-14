import React from "react";
import "./Sidebar.css";
import dashboard from "../../assets/dashboard.png";
import product from "../../assets/product.png";
import order from "../../assets/order.png";

const Sidebar = ({ onItemClick }) => {
    return (
        <div className="sidebar">
            <ul>
                <div
                    className="side-link"
                    onClick={() => {
                        onItemClick("Dashboard");
                    }}
                >
                    <img className="dashboard" src={dashboard} />
                    <p>Dashboard</p>
                </div>
                <div
                    className="side-link"
                    onClick={() => {
                        onItemClick("Products");
                    }}
                >
                    <img className="product" src={product} />
                    <p>Products</p>
                </div>
                <div
                    className="side-link"
                    onClick={() => {
                        onItemClick("Orders");
                    }}
                >
                    <img className="order" src={order} />
                    <p>Orders</p>
                </div>
            </ul>
        </div>
    );
};

export default Sidebar;
