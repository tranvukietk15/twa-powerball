import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";
import { Card, FlexBoxCol } from "./styled/styled";
import "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
	labels: [
		"Fairlaunch: 32%",
		"DEXs listing: 25%",
		"Incentives: 18%",
		"Marketing: 14%",
		"Team & Dev: 11%",
	],
	datasets: [
		{
			label: "# value",
			data: [32, 25, 18, 14, 11],
			backgroundColor: [
				"rgba(255, 99, 132, 0.8)", // Red with 80% opacity
				"rgba(54, 162, 235, 0.8)", // Blue with 80% opacity
				"rgba(255, 206, 86, 0.8)", // Yellow with 80% opacity
				"rgba(75, 192, 192, 0.8)", // Teal with 80% opacity
				"rgba(153, 102, 255, 0.8)", // Purple with 80% opacity
				// "rgba(255, 159, 64, 0.2)",
			],
			borderColor: [
				"rgba(255, 99, 132, 1)",
				"rgba(54, 162, 235, 1)",
				"rgba(255, 206, 86, 1)",
				"rgba(75, 192, 192, 1)",
				"rgba(153, 102, 255, 1)",
				// "rgba(255, 159, 64, 1)",
			],
			borderWidth: 1,
		},
	],
};

export const PieChart = () => {
	const drawInnerText = (chart: any) => {
		let ctx = chart.ctx;
		ctx.restore();
		const fontSize = (chart.height / 114).toFixed(2);
		ctx.font = fontSize + "em sans-serif";
		ctx.textBaseline = "middle";
		const dataArrValues = chart.config._config.data.datasets[0].data;
		let text =
			chart.tooltip._active.length > 0
				? `${Math.round(
						(dataArrValues[chart.tooltip._active[0].datasetIndex] /
							dataArrValues.reduce((a: any, b: any) => a + b)) *
							100
				  )}%`
				: `${Math.round(
						(dataArrValues[0] /
							dataArrValues.reduce((a: any, b: any) => a + b)) *
							100
				  )}%`;
		let textX = Math.round((chart.width - ctx.measureText(text).width) / 2);
		let textY = chart.height / 2 + chart.legend.height / 2;
		ctx.fillText(text, textX, textY);
		ctx.fillStyle = "#fff";
		ctx.save();
	};

	const options = {
		responsive: true,
		maintainAspectRatio: false, // Prevent stretching
		plugins: {
			datalabels: {
				anchor: "center", // Center labels within slices
				align: "end", // Align labels vertically at the end of slices
				formatter: (value: any, context: any) => {
					const label = context.chart.data.labels[context.dataIndex];
					// Customize label display (e.g., add units, percentages)
					return `${label}: ${value}%`;
				},
			},
		},
	};

	return (
		<div className="Container">
			{/* <TonConnectButton /> */}

			<Card>
				<FlexBoxCol>
					{/* Degon tokenomics */}
					<div
						className="chart canvas-container"
						style={{ height: 300, marginBottom: 20 }}
					>
						<Doughnut
							data={data}
							options={{
								responsive: true,
								maintainAspectRatio: false, // Prevent stretching
								plugins: {
									datalabels: {
										anchor: "center", // Center labels within slices
										align: "end", // Align labels vertically at the end of slices
									},
								},
							}}
						/>
					</div>
				</FlexBoxCol>
			</Card>
		</div>
	);
};
