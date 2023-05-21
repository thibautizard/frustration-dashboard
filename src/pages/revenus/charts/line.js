import HighchartsReact from "highcharts-react-official";
import Highcharts from "../../../config/highcharts.config";
import { events } from "./events";

export function ChartLine({ type, data }) {
	const title = `${{ subscription: "Abonnements", donation: "Dons", sale: "Ventes de numéros" }[type]}`;
	const yAxisUnit = { subscription: "abonnés", donation: "donateurs", sale: "acheteurs" }[type];
	const options = {
		chart: {
			type: "line"
		},
		title: {
			text: title,
			align: "center",
			margin: 25,
			style: {
				color: "#FFFFFF",
				fontSize: "28px"
			}
		},
		xAxis: {
			type: "datetime",
			labels: {
				format: "{value: %b %Y}"
			},
			title: {
				text: ""
			},
			plotLines: events
		},
		yAxis: [
			{
				labels: {
					format: `{value} ${yAxisUnit}`
				},
				title: {
					text: ""
				},
				gridLineWidth: 0
			},
			{
				gridLineWidth: 0,
				labels: {
					format: "{value}€"
				},
				title: {
					text: ""
				},
				opposite: true
			}
		],

		series: [
			{
				name: "HelloAsso",
				yAxis: 1,
				color: "#4AD28A",
				data: data.filter((row) => row.source === "helloasso").map((cv) => [new Date(cv.created).getTime(), cv.net]),
				tooltip: {
					headerFormat: '<span style="font-size:10px">Revenus HelloAsso</span><br/>',
					valueSuffix: " €"
				},
				showInLegend: true
			},

			{
				name: "Stripe",
				yAxis: 1,
				color: "#515EE1",
				data: data.filter((row) => row.source === "stripe").map((cv) => [new Date(cv.created).getTime(), cv.net]),
				tooltip: {
					headerFormat: '<span style="font-size:10px">Revenus Stripe</span><br/>',
					valueSuffix: " €"
				},
				showInLegend: true
			}
		]
	};

	return <HighchartsReact highcharts={Highcharts} options={options}></HighchartsReact>;
}
