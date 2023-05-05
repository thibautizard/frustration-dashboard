import React from "react";
import { ChartStripeTypeSubscriptions } from "./charts/highcharts";
import { ChartLine } from "./charts/line";
import Panel from "./components/Panel";
import styled from "styled-components";

const Revenus = styled(({ className }) => {
	return (
		<div class={className}>
			{/* <p>{balance.available}</p> */}

			<Panel />

			<ChartLine type="subscriptions" />
			<ChartLine type="donations" />
			{/* <ChartLine type="ventes" /> */}
		</div>
	);
})`
	display: flex;
	flex-direction: column;
	gap: 20px;
	box-sizing: border-box;
	overflow: visible;

	.charts-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 10px;

		& > *:first-child {
			flex-basis: 0px;
			flex-grow: 1;
		}

		& > *:last-child {
			flex-basis: 0px;
			flex-grow: 1;
		}
	}

	.secondary-charts {
		display: flex;
		justify-content: space-between;

		.highcharts-container {
			flex-grow: 1;
			flex-shrink: 0;
			flex-basis: 30%;
		}
	}
`;

export default Revenus;
