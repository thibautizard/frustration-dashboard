import HighchartsReact from "highcharts-react-official";
import Highcharts from "../../../config/highcharts.config";
import useDatabase from "../hooks/useIncome";

export function ChartLine({ type }) {
	const data = useDatabase()[type];
	const title = `${{ subscriptions: "Abonnements", donations: "Dons" }[type]}`;
	const yAxisUnit = { subscriptions: "abonnés", donations: "donateurs" }[type];

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
			plotLines: [
				{
					value: Date.UTC(2022, 10, 15),
					color: "red",
					dashStyle: "dash",
					width: 2,
					label: {
						text: "Campagne de dons",
						style: {
							color: "white"
						}
					}
				},
				{
					value: Date.UTC(2023, 2, 11),
					color: "red",
					dashStyle: "dash",
					width: 2,
					label: {
						text: "Campagne d'abonnements",
						style: {
							color: "white"
						}
					}
				}
			]
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
				name: `${title} HelloAsso`,
				yAxis: 0,
				color: "#4AD28A",
				lineWidth: 0,
				marker: {
					enabled: false
				},
				data: data
					.filter((subscription) => subscription.source === "helloasso")
					.map((cv) => [new Date(cv.created).getTime(), cv[type]]),
				showInLegend: false
			},
			{
				name: "HelloAsso",
				yAxis: 1,
				color: "#4AD28A",
				data: data
					.filter((subscription) => subscription.source === "helloasso")
					.map((cv) => [new Date(cv.created).getTime(), cv.net]),
				tooltip: {
					headerFormat: '<span style="font-size:10px">Revenus HelloAsso</span><br/>',
					valueSuffix: " €"
				},
				showInLegend: true
			},
			{
				name: `Abonnés Stripe`,
				yAxis: 0,
				color: "#515EE1",
				lineWidth: 0,
				marker: {
					enabled: false
				},
				data: data
					.filter((subscription) => subscription.source === "stripe")
					.map((cv) => [new Date(cv.created).getTime(), cv[type]]),
				showInLegend: false
			},
			{
				name: "Stripe",
				yAxis: 1,
				color: "#515EE1",
				data: data
					.filter((subscription) => subscription.source === "stripe")
					.map((cv) => [new Date(cv.created).getTime(), cv.net]),
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
