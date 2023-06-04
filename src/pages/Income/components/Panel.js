import React, { useState } from "react";
import styled from "styled-components";
import { IoCaretBackOutline, IoCaretForwardOutline } from "react-icons/io5";
import { ChartColumn } from "./charts/panel-column";
import { tidy, summarize, groupBy, sum } from "@tidyjs/tidy";

const Panel = styled(({ className, type, data }) => {
	const [index, setIndex] = useState(0);
	data = tidy(data, groupBy(["created", "type"], [summarize({ total: sum("total"), net: sum("net") })]));

	const label = {
    total: null,
		subscription: "abonnements actifs",
		donation: "don" + (data.length > 1 ? "s" : ""),
		sale: "ventes"
	}[type];

  const icon = {
		subscription: "🙆‍♂️",
		donation: "🙏",
		sale: "📰"
	}[type];

	// get the current date
	const currentDate = new Date(data[index]?.created);

	// subtract one month from the current date
	const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);

	// get the name of the last month in French
	const options = { month: "long", timeZone: "UTC" };
	let lastMonthName = lastMonth.toLocaleString("fr-FR", options);
	lastMonthName = lastMonthName.slice(0, 1).toUpperCase() + lastMonthName.slice(1);

	// get evolution
	let evolution = "";
	if (data[index + 1]?.net) {
		let percent = ((data[index].net - data[index + 1].net) / data[index].net) * 100;
		percent = Math.trunc(percent * 100) / 100;
		evolution = percent > 0 ? `(+${percent}%)` : `(${percent}%)`;
	}

	return (
		<div className={className}>
			<div className="left">
				<h2>
					{lastMonthName} {currentDate.getFullYear()}
				</h2>
				{label && <p>
					{icon}{" "}
					<span>
						{data && data[index]?.total} {label}
					</span>
				</p>}
				<p>
					💸{" "}
					<span>
						{data && data[index]?.net} € nets {evolution}
					</span>
				</p>
				<div className="arrows">
					<IoCaretBackOutline
						className={index === data.length - 1 ? "disabled" : "enabled"}
						onClick={() => setIndex((prevIndex) => (prevIndex < data.length - 1 ? prevIndex + 1 : prevIndex))}
					/>
					<IoCaretForwardOutline
						className={index === 0 ? "disabled" : "enabled"}
						onClick={() => setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex))}
					/>
				</div>
			</div>
			<div className="right">
				<ChartColumn type={type} data={data} />
			</div>
		</div>
	);
})`
	box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
	user-select: none;
	background: black;
	display: flex;
	justify-content: space-between;

	& :is(.right, .left) {
	}

	.left {
		color: #fff200;
		border-radius: 15px;
		padding: 10px 20px;
	}

	.right {
		color: #000;
		border-top-right-radius: 15px;
		border-bottom-right-radius: 15px;
		padding: 0;
	}

	h2 {
		font-size: 28px;
		margin-bottom: 5px;
	}

	p span {
		margin-left: 5px;
	}

	.arrows {
		font-size: 25px;
		margin-top: 10px;

		> * {
			gap: 0;
			margin: 0;

			&:hover {
				cursor: pointer;
			}

			&.disabled {
				opacity: 0.5;
			}
		}
	}
`;

export default Panel;
