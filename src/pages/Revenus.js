import React, { useState, useEffect } from "react";
import {
  ChartStripeSubscriptions,
  ChartStripeTypeSubscriptions,
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
      <div className="secondary-charts">
        <ChartStripeTypeSubscriptions/>
        <ChartStripeTypeSubscriptions/>

      </div>
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
  overflow:visible;


  .secondary-charts {
    display:flex;
    justify-content:space-between;


    .highcharts-container {
      flex-grow:1;
      flex-shrink:0;
      flex-basis:30%;
    }
  }

`;

export default Revenus;
