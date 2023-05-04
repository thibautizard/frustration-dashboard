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

			<div className="charts-container">
				<ChartLine type="subscriptions" source="Stripe" color="#515EE1" />
				<ChartLine type="subscriptions" source="HelloAsso" color="#4AD28A" />
			</div>
			<ChartLine type="donations" source="Stripe" color="#515EE1" />
			<ChartStripeTypeSubscriptions />

			<div className="secondary-charts">
				<ChartStripeTypeSubscriptions />
			</div>

			<ChartLine type="donations" source="HelloAsso" color="#4AD28A" />
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

		& > *:first-child {
			flex-grow: 1;
		}

		& > *:last-child {
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
