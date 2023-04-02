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

  display:flex;
  flex-direction:column;
  gap:20px;
  box-sizing:border-box;

`;

export default Revenus;
