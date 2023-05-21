import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Tabs = styled(({ className }) => {
	const [selectedIndex, setSelectedIndex] = useState(0);

	const selectTab = ({ target }) => {
		const chips = Array.from(document.querySelectorAll("[data-chip]"));
		if (chips.includes(target)) {
			setSelectedIndex(chips.indexOf(target));
		}
	};
	return (
		<div className={className} onClick={selectTab}>
			{["Abonnements", "Dons", "Ventes"].map((text, index) => (
				<Chip active={index === selectedIndex}>{text}</Chip>
			))}
		</div>
	);
})`
	padding: 5px 0;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 30px;
`;

const Chip = styled(({ className, children, active }) => {
	return (
		<Link to={children.toLowerCase()} className={className} data-chip data-active={active}>
			{children}
		</Link>
	);
})`
	color: #000;
	font-size: 20px;
	padding: 3px 25px;
	border-radius: 20px;
	cursor: pointer;
	font-weight: bold;
	&[data-active="true"] {
		color: #fff200;
		background: #000;
		box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.3);
	}
`;
