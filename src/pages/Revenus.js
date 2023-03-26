import React, { useState, useEffect } from "react";
import { Highcharts, HighchartsReact } from "../config/highcharts";
import styled from "styled-components";
import useSubscriptions from "../hooks/useSubscriptions";
import useDonations from "../hooks/useDonations";
import useBalance from "../hooks/useBalance";

const Revenus = styled(({ className }) => {
  const [balance, setBalance] = useBalance();
  const [subscriptions, setSubscriptions] = useSubscriptions();
  const [donations, setDonations] = useDonations();
  console.log(donations);
  const stripeSubscriptionsOptions = {
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

  const stripeDonationsOptions = {
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

  const helloassoSubscriptionsOptions = {
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

  const helloassoDonationsOptions = {
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
    <div class={className}>
      {/* <p>{balance.available}</p> */}

      <HighchartsReact
        highcharts={Highcharts}
        options={stripeSubscriptionsOptions}
      ></HighchartsReact>

      <HighchartsReact
        highcharts={Highcharts}
        options={helloassoSubscriptionsOptions}
      ></HighchartsReact>

      <HighchartsReact
        highcharts={Highcharts}
        options={stripeDonationsOptions}
      ></HighchartsReact>

      <HighchartsReact
        highcharts={Highcharts}
        options={helloassoDonationsOptions}
      ></HighchartsReact>
    </div>
  );
})`
  text-align: center;
  align-self: center;
  margin: auto;
  overflow: scroll;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  & > * {
    flex-basis: 49%;
    flex-shrink: 1;
  }
  p {
    font-size: 1.5rem;
  }
`;

export default Revenus;
