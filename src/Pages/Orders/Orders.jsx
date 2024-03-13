import ordersData from "../../data/orders";

function Orders() {
    return (
        <div>
            <h1>Orders Management</h1>
            <ul>
                {ordersData.map((order, index) => (
                    <li key={index}>
                        Order ID: {order.id} - Customer: {order.customerName} -
                        Date: {order.orderDate} - Status: {order.status}
                    </li>
                ))}
            </ul>
            <button>Update Status</button>
        </div>
    );
}

export default Orders;
