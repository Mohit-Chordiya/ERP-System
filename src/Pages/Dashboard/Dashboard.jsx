import "./Dashboard.css";

function Dashboard() {
    const handleClick = () => {
        alert("Card clicked!");
    };
    return (
        <div>
            <h1>Dashboard</h1>
            <div className="Cards">
                <div className="Card" onClick={handleClick}>
                    <h2>
                        <center>Total number of products</center>
                    </h2>
                    <h3>
                        <center>10</center>
                    </h3>
                </div>
                <div className="Card" onClick={handleClick}>
                    <h2>
                        <center>Total number of orders</center>
                    </h2>
                    <h3>
                        <center>5</center>
                    </h3>
                </div>
                <div className="Card" onClick={handleClick}>
                    <h2>
                        <center>Manage Products</center>
                    </h2>
                </div>
                <div className="Card" onClick={handleClick}>
                    <h2>
                        <center>Manage Orders</center>
                    </h2>
                </div>
            </div>
            <a href="/products"></a>
            <br />
            <a href="/orders"></a>
        </div>
    );
}

export default Dashboard;
