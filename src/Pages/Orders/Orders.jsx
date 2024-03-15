import { useState } from "react";
import "./Orders.css";

const initialOrders = [
    {
        id: 1,
        customerName: "Customer 1",
        orderDate: "10-03-2024",
        status: "Pending",
    },
    {
        id: 2,
        customerName: "Customer 2",
        orderDate: "09-03-2024",
        status: "Shipped",
    },
    {
        id: 3,
        customerName: "Customer 3",
        orderDate: "08-03-2024",
        status: "Delivered",
    },
    {
        id: 4,
        customerName: "Customer 4",
        orderDate: "07-03-2024",
        status: "Pending",
    },
    {
        id: 5,
        customerName: "Customer 3",
        orderDate: "06-03-2024",
        status: "Shipped",
    },
];

const OrdersManagement = () => {
    const [orders, setOrders] = useState(initialOrders);
    const [editingId, setEditingId] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState({});

    const handleEditStatus = (id) => {
        const updatedOrders = orders.map((order) =>
            order.id === id ? { ...order, status: selectedStatus[id] } : order
        );
        setOrders(updatedOrders);
        setEditingId(null);
    };

    const handleStatusChange = (id, status) => {
        setSelectedStatus({ ...selectedStatus, [id]: status });
    };

    const handleDeleteOrder = (id) => {
        const updatedOrders = orders.filter((order) => order.id !== id);
        setOrders(updatedOrders);
    };

    return (
        <div>
            <h1 className="order-h1">Orders Management</h1>
            <div className="main-order-table">
                <table className="orders-table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer Name</th>
                            <th>Order Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.customerName}</td>
                                <td>{order.orderDate}</td>
                                <td>
                                    {editingId === order.id ? (
                                        <select
                                            value={
                                                selectedStatus[order.id] ||
                                                order.status
                                            }
                                            onChange={(e) =>
                                                handleStatusChange(
                                                    order.id,
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option value="Pending">
                                                Pending
                                            </option>
                                            <option value="Shipped">
                                                Shipped
                                            </option>
                                            <option value="Delivered">
                                                Delivered
                                            </option>
                                        </select>
                                    ) : (
                                        order.status
                                    )}
                                </td>
                                <td>
                                    {editingId === order.id ? (
                                        <center>
                                            <button
                                                onClick={() =>
                                                    handleEditStatus(
                                                        order.id,
                                                        order.status
                                                    )
                                                }
                                            >
                                                Save
                                            </button>
                                        </center>
                                    ) : (
                                        <>
                                            <center>
                                                <button
                                                    onClick={() =>
                                                        setEditingId(order.id)
                                                    }
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handleDeleteOrder(
                                                            order.id
                                                        )
                                                    }
                                                >
                                                    Delete
                                                </button>
                                            </center>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrdersManagement;
