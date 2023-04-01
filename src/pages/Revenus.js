import React, { useState, useEffect } from "react";
import {
  ChartStripeSubscriptions,
  ChartStripeDonations,
  ChartHelloassoSubscriptions,
  ChartHelloassoDonations,
} from "../charts/highcharts";
import styled from "styled-components";


const Revenus = styled(({ className }) => {
  return (
    <div class={className}>
      {/* <p>{balance.available}</p> */}

      <ChartStripeSubscriptions />
      <ChartHelloassoSubscriptions />
      <ChartStripeDonations />
      <ChartHelloassoDonations />
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
