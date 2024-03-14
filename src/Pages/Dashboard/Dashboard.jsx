import "./Dashboard.css";
import BarGraph from "../../components/Charts/BarGraph";

function Dashboard() {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                label: "Product A",
                data: [1000, 1500, 1200, 1800, 1400, 1600],
                backgroundColor: "#16c79b",
                borderColor: "rgba(211, 99, 132, 1)",
                borderWidth: 1,
            },
            {
                label: "Product B",
                data: [1200, 1300, 1100, 1600, 1500, 1700],
                backgroundColor: "#CAE9F3",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
            },
        ],
    };
    return (
        <div>
            <h1>Dashboard</h1>
            <div className="Card-Chart">
                <div className="Cards">
                    <div className="Card">
                        <h2>
                            <center>Total number of products</center>
                        </h2>
                        <h3>
                            <center>10</center>
                        </h3>
                    </div>
                    <div className="Card">
                        <h2>
                            <center>Total number of orders</center>
                        </h2>
                        <h3>
                            <center>5</center>
                        </h3>
                    </div>
                    <div className="Card">
                        <h2>
                            <center>Total Sales</center>
                        </h2>
                    </div>
                    <div className="Card">
                        <h2>
                            <center>Manage Orders</center>
                        </h2>
                    </div>
                </div>
                <div className="Bar-Chart">
                    <BarGraph data={data} />
                </div>
                <a href="/products"></a>
                <br />
                <a href="/orders"></a>
            </div>
        </div>
    );
}

export default Dashboard;
