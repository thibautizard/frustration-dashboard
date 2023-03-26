import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

Highcharts.setOptions({
  lang: {
    weekdays: [
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
      "Dimanche",
    ],
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
      "Décembre",
    ],
    sortMonths: [
      "Jan.",
      "Fév.",
      "Mars",
      "Avr.",
      "Mai",
      "Juin",
      "Juil.",
      "Août",
      "Sept.",
      "Oct.",
      "Nov.",
      "Déc.",
    ],
  },

  chart: {
    backgroundColor: "#000000",
    borderRadius: "0px",
    spacing: [20, 30, 20, 30],
    style: {
      fontFamily: "Poppins",
    },
  },
  credits: {
    enabled: false,
  },
  legend: {
    margin: 0,
    enabled: false,
    itemStyle: {
      color: "#FFFFFF",
      fontWeight: 400,
    },

    itemHoverStyle: {
      color: "#FFFFFF",
      fontWeight: 400,
    },
  },
  tooltip: {
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    dateTimeLabelFormats: {
      day: " %A %e %b %Y",
      hour: "%A %e %B, %H:%M",
    },
  },
  time: {
    timezone: "Europe/Paris",
  },
  title: {
    align: "center",
    margin: 25,
    style: {
      color: "#FFFFFF",
      fontSize: "24px",
    },
  },

  xAxis: {
    gridLineColor: "#FFFFFF",
    labels: {
      style: {
        color: "#FFFFFF",
      },
    },
    title: {
      style: {
        color: "#FFFFFF",
      },
    },
  },

  yAxis: {
    gridLineColor: "#FFFFFF",
    labels: {
      style: {
        color: "#FFFFFF",
      },
    },
    title: {
      style: {
        color: "#FFFFFF",
      },
    },
  },
});

export { Highcharts, HighchartsReact };
