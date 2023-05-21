import React from "react";
import styled from "styled-components";
import { Tabs } from "./components/Tabs";
import { Outlet } from "react-router-dom";
import useIncome from "./hooks/useIncome";

const Revenus = styled(({ className }) => {
	const { total } = useIncome();

	return (
		<div className={className}>
			<Tabs />
			<Outlet context={{ data: total }}></Outlet>
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
