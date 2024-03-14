import "./Dashboard.css";
import BarGraph from "../../components/Charts/BarGraph";
import orangeCart from "../../assets/orange_cart.png";
import orangeRevenue from "../../assets/orange_revenue.png";
import orangeSale from "../../assets/orange_sale.png";
import orangeProduct from "../../assets/orange_product.png";

function Dashboard() {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                label: "Production",
                data: [1000, 1500, 1200, 1800, 1400, 1600],
                backgroundColor: "#16c79b",
                borderColor: "rgba(211, 99, 132, 1)",
                borderWidth: 1,
            },
            {
                label: "Sales",
                data: [800, 1300, 1200, 1600, 1200, 1500],
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
                        <img className="orangeCart" src={orangeProduct} />
                        <h2>
                            <center style={{ padding: "8px 20px" }}>
                                Total products
                            </center>
                            <center>500</center>
                        </h2>
                    </div>
                    <div className="Card">
                        <img className="dashboard" src={orangeCart} />
                        <h2>
                            <center style={{ padding: "8px 20px" }}>
                                Total orders
                            </center>
                            <center>10,000</center>
                        </h2>
                    </div>
                    <div className="Card">
                        <img className="dashboard" src={orangeSale} />
                        <h2>
                            <center style={{ padding: "8px 14px" }}>
                                Total Monthly Sales
                            </center>
                            <center>$ 50,000</center>
                        </h2>
                    </div>
                    <div className="Card">
                        <img className="orangeRevenue" src={orangeRevenue} />
                        <h2>
                            <center style={{ padding: "8px 20px" }}>
                                Total Revenue
                            </center>
                            <center>$ 10,00,000</center>
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
