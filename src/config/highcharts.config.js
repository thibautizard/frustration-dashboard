import Highcharts from "highcharts";

Highcharts.setOptions({
	lang: {
		weekdays: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
		decimalPoint: ",",
		months: [
			"Janvier",
			"Février",
			"Mars",
			"Avril",
			"Mai",
			"Juin",
			"Juillet",
			"Août",
			"Septembre",
			"Octobre",
			"Novembre",
			"Décembre"
		],
		sortMonths: ["Jan.", "Fév.", "Mars", "Avr.", "Mai", "Juin", "Juil.", "Août", "Sept.", "Oct.", "Nov.", "Déc."]
	},

	chart: {
		backgroundColor: "rgba(0,0,0,.85)",
		height: 500,
		borderRadius: "0px",
		spacing: [20, 30, 20, 30],
		style: {
			fontFamily: "Poppins"
		}
	},
	credits: {
		enabled: false
	},

	legend: {
		margin: 0,
		enabled: false,
		itemStyle: {
			color: "#FFFFFF",
			fontWeight: 400
		},

		itemHoverStyle: {
			color: "#FFFFFF",
			fontWeight: 400
		}
	},
	tooltip: {
		backgroundColor: "#FFFFFF",
		borderWidth: 2,
		dateTimeLabelFormats: {
			day: " %A %e %b %Y",
			hour: "%A %e %B, %H:%M"
		}
	},
	time: {
		timezone: "Europe/Paris"
	},

	xAxis: {
		gridLineColor: "#FFFFFF",
		labels: {
			style: {
				color: "#FFFFFF"
			}
		},
		title: {
			style: {
				color: "#FFFFFF"
			}
		}
	},

	yAxis: {
		gridLineColor: "#FFFFFF",
		labels: {
			style: {
				color: "#FFFFFF"
			}
		},
		title: {
			style: {
				color: "#FFFFFF"
			}
		}
	}
});

export default Highcharts;
