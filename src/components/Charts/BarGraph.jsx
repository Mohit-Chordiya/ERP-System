import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BarGraph = ({ data }) => {
    const chartContainer = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        if (chartContainer.current) {
            chartInstance.current = new Chart(chartContainer.current, {
                type: "bar",
                data: data,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            stacked: false,
                            grid: {
                                color: "rgba(255, 255, 255, 0.2)",
                            },
                            ticks: {
                                color: "white",
                            },
                        },
                        y: {
                            stacked: false,
                            grid: {
                                color: "rgba(255, 255, 255, 0.2)",
                            },
                            ticks: {
                                color: "white",
                            },
                        },
                    },
                },
            });
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [data]);

    return <canvas ref={chartContainer} />;
};

export default BarGraph;
