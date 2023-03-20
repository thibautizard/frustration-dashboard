import React, { useState, useEffect } from "react";
import { Highcharts, HighchartsReact } from "../config/highcharts";
import styled from "styled-components";
import {
  calculatesubscriptionsCumulated,
  calculatesubscriptionsPriceCumulated,
} from "../utils/utils";
import useSubscriptions from "../hooks/useSubscriptions";
import useBalance from "../hooks/useBalance";

const Paiements = styled(({ className }) => {
  const [balance, setBalance] = useBalance();
  const [subscriptions, setSubscriptions] = useSubscriptions();

  const options = {
    chart: {
      type: "line",
    },
    title: {
      text: "Abonnements Stripe",
    },
    xAxis: {
      type: "datetime",
      title: {
        text: "Date",
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
        name: "Quantité",
        yAxis: 0,
        data: calculatesubscriptionsCumulated(subscriptions),
      },
      {
        name: "Revenus",
        yAxis: 1,
        data: calculatesubscriptionsPriceCumulated(subscriptions),
        tooltip: {
          valueSuffix: " €",
        },
      },
    ],
  };

  return (
    <div class={className}>
      {/* <p>{balance.available}</p> */}
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
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
  gap: 15px;
  & > * {
    flex-basis: 50%;
    flex-shrink: 1;
  }
  p {
    font-size: 1.5rem;
  }
`;

export default Paiements;
