import React from "react";
import Panel from "../components/Panel";
import { ChartLine } from "../charts/line";
import { useOutletContext } from "react-router-dom";

export default function Abonnements() {
	let { data } = useOutletContext();
	const type = "subscription";
	data = data.filter((row) => row.type === type);
	return (
		<>
			<Panel type={type} data={data} />
			<ChartLine type={type} data={data} />
		</>
	);
}
