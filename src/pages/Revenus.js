import React, { useState, useEffect } from "react";
import {
  ChartStripeSubscriptions,
  ChartStripeTypeSubscriptions,
  ChartStripeDonations,
  ChartHelloassoSubscriptions,
  ChartHelloassoDonations,
} from "../charts/highcharts";
import useDatabase from "../hooks/useDatabase";
import styled from "styled-components";

const Revenus = styled(({ className }) => {

  // get the current date
  const currentDate = new Date();

  // subtract one month from the current date
  const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth());

  // get the name of the last month in French
  const options = { month: 'long', timeZone: 'UTC' };
  const lastMonthName = lastMonth.toLocaleString('fr-FR', options);

  const { total }= useDatabase();

  return (
    <div class={className}>
      {/* <p>{balance.available}</p> */}

      <div>
        <h2>Total abonnements {lastMonthName}</h2>
        <p>Nombre : <span>{total && total[0]?.subscriptions} abonnements actifs</span></p>
        <p>Revenus : <span>{total && total[0]?.net} € nets (+{total && total[0]?.evolution})</span></p>
      </div>

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
