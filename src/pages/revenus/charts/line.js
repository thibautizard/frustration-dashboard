import HighchartsReact from "highcharts-react-official";
import Highcharts from "../../../config/highcharts.config";
import useDatabase from "../hooks/useIncome";

export function ChartLine({ type, source, color }) {
	const data = useDatabase()[type];
	const title = `${{ subscriptions: "Abonnements", donations: "Dons" }[type]} ${source}`;
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
			}
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
				name: title,
				yAxis: 0,
				color: color,
				lineWidth: 0,
				marker: {
					enabled: false
				},
				data: data
					.filter((subscription) => subscription.source === source.toLowerCase())
					.map((cv) => [new Date(cv.created).getTime(), cv[type]]),
				showInLegend: true
			},
			{
				name: "Revenus",
				yAxis: 1,
				color: color,
				data: data
					.filter((subscription) => subscription.source === source.toLowerCase())
					.map((cv) => [new Date(cv.created).getTime(), cv.net]),
				tooltip: {
					valueSuffix: " €"
				},
				showInLegend: true
			}
		]
	};

	return <HighchartsReact highcharts={Highcharts} options={options}></HighchartsReact>;
}
