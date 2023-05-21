import Panel from "../components/Panel";
import { ChartLine } from "../charts/line";
import { useOutletContext } from "react-router-dom";

export default function Dons() {
	let { data } = useOutletContext();
	const type = "sale";
	data = data.filter((row) => row.type === type);
	return (
		<>
			<Panel type={type} data={data} />
			<ChartLine type={type} data={data} />
		</>
	);
}
