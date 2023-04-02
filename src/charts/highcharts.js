import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import useDatabase from "../hooks/useDatabase";

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

// REVENUS //
export const ChartStripeSubscriptions = () => {
  const { subscriptions } = useDatabase();

  const options = {
    chart: {
      type: "line",

    },
    title: {
      text: "Abonnements Stripe",
    },
    xAxis: {
      type: "datetime",
      labels: {
        format: "{value: %b %Y}", // Set the date format for the x-axis labels
      },
      title: {
        text: "",
      },
    },
    yAxis: [
      {
        labels: {
          format: "{value} abonnés",
        },
        title: {
          text: "",
        },
        gridLineWidth: 0,
      },
      {
        gridLineWidth: 0,
        labels: {
          format: "{value}€",
        },
        title: {
          text: "",
        },
        opposite: true,
      },
    ],
    series: [
      {
        name: "Abonnements",
        yAxis: 0,
        color: "#515EE1",
        lineWidth: 0,
        marker: {
          enabled: false,
        },
        data: subscriptions
          .filter(({ source }) => source === "stripe")
          .map((cv) => [new Date(cv.available).getTime(), cv.subscriptions]),
        showInLegend: true,
      },
      {
        name: "Revenus",
        yAxis: 1,
        color: "#515EE1",
        data: subscriptions
          .filter(({ source }) => source === "stripe")
          .map((cv) => [new Date(cv.available).getTime(), cv.net]),
        tooltip: {
          valueSuffix: " €",
        },
        showInLegend: true,
      },
    ],
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    ></HighchartsReact>
  );
};

export const ChartStripeDonations = () => {
  const { donations } = useDatabase();

  const options = {
    chart: {
      type: "line",

    },
    title: {
      text: "Dons Stripe",
    },
    xAxis: {
      type: "datetime",
      labels: {
        format: "{value: %b %Y}", // Set the date format for the x-axis labels
      },
      title: {
        text: "",
      },
    },
    yAxis: [
      {
        labels: {
          format: "{value} donateurs",
        },
        title: {
          text: "",
        },
        gridLineWidth: 0,
      },
      {
        gridLineWidth: 0,
        labels: {
          format: "{value}€",
        },
        title: {
          text: "",
        },
        opposite: true,
      },
    ],
    series: [
      {
        name: "Dons",
        yAxis: 0,
        color: "#515EE1",
        lineWidth: 0,
        marker: {
          enabled: false,
        },
        data: donations
          .filter(({ source }) => source === "stripe")
          .map((cv) => [new Date(cv.available).getTime(), cv.donations]),
        showInLegend: true,
      },
      {
        name: "Revenus",
        yAxis: 1,
        color: "#515EE1",
        data: donations
          .filter(({ source }) => source === "stripe")
          .map((cv) => [new Date(cv.available).getTime(), cv.net]),
        tooltip: {
          valueSuffix: " €",
        },
        showInLegend: true,
      },
    ],
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    ></HighchartsReact>
  );
};

export const ChartHelloassoSubscriptions = () => {
  const { subscriptions } = useDatabase();

  const options = {
    chart: {
      type: "line",

    },
    title: {
      text: "Abonnements HelloAsso",
    },
    xAxis: {
      type: "datetime",
      labels: {
        format: "{value:%b %Y}", // Set the date format for the x-axis labels
      },
      title: {
        text: "",
      },
    },
    yAxis: [
      {
        labels: {
          format: "{value} abonnés",
        },
        title: {
          text: "",
        },
        gridLineWidth: 0,
      },
      {
        gridLineWidth: 0,
        labels: {
          format: "{value}€",
        },
        title: {
          text: "",
        },
        opposite: true,
      },
    ],
    series: [
      {
        name: "Abonnements",
        yAxis: 0,
        color: "#4AD28A",
        lineWidth: 0,
        marker: {
          enabled: false,
        },
        data: subscriptions
          .filter(({ source }) => source === "helloasso")
          .map((cv) => [new Date(cv.available).getTime(), cv.subscriptions]),
        showInLegend: true,
      },
      {
        name: "Revenus",
        yAxis: 1,
        color: "#4AD28A",
        data: subscriptions
          .filter(({ source }) => source === "helloasso")
          .map((cv) => [new Date(cv.available).getTime(), cv.net]),
        tooltip: {
          valueSuffix: " €",
        },
        showInLegend: true,
      },
    ],
  };
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    ></HighchartsReact>
  );
};

export const ChartHelloassoDonations = () => {
  const { donations } = useDatabase();

  const options = {
    chart: {
      type: "line",

    },
    title: {
      text: "Dons HelloAsso",
    },
    xAxis: {
      type: "datetime",
      labels: {
        format: "{value: %b %Y}", // Set the date format for the x-axis labels
      },
      title: {
        text: "",
      },
    },
    yAxis: [
      {
        labels: {
          format: "{value} donateurs",
        },
        title: {
          text: "",
        },
        gridLineWidth: 0,
      },
      {
        gridLineWidth: 0,
        labels: {
          format: "{value}€",
        },
        title: {
          text: "",
        },
        opposite: true,
      },
    ],
    series: [
      {
        name: "Dons",
        yAxis: 0,
        color: "#4AD28A",
        lineWidth: 0,
        marker: {
          enabled: false,
        },
        data: donations
          .filter(({ source }) => source === "helloasso")
          .map((cv) => [new Date(cv.available).getTime(), cv.donations]),
        showInLegend: true,
      },
      {
        name: "Revenus",
        yAxis: 1,
        color: "#4AD28A",
        data: donations
          .filter(({ source }) => source === "helloasso")
          .map((cv) => [new Date(cv.available).getTime(), cv.net]),
        tooltip: {
          valueSuffix: " €",
        },
        showInLegend: true,
      },
    ],
  };
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    ></HighchartsReact>
  );
};
