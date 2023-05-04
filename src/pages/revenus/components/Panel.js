import React, { useState } from "react";
import styled from "styled-components";
import useDatabase from "../hooks/useIncome";
import { IoCaretBackOutline, IoCaretForwardOutline } from "react-icons/io5";

const Panel = styled(({ className }) => {
	const [index, setIndex] = useState(0);
	const { total } = useDatabase();

	// get the current date
	const currentDate = new Date(total[index]?.created);

	// subtract one month from the current date
	const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);

	// get the name of the last month in French
	const options = { month: "long", timeZone: "UTC" };
	let lastMonthName = lastMonth.toLocaleString("fr-FR", options);
	lastMonthName = lastMonthName.slice(0, 1).toUpperCase() + lastMonthName.slice(1);

	return (
		<div className={className}>
			<h2>
				{lastMonthName} {currentDate.getFullYear()}
			</h2>
			<p>
				🙆‍♂️ <span>{total && total[index]?.subscriptions} abonnements actifs</span>
			</p>
			<p>
				💸{" "}
				<span>
					{total && total[index]?.net} € nets ({total && total[index]?.evolution})
				</span>
			</p>
			<div className="arrows">
				<IoCaretBackOutline
					className={index === total.length - 1 ? "disabled" : "enabled"}
					onClick={() => setIndex((prevIndex) => (prevIndex < total.length - 1 ? prevIndex + 1 : prevIndex))}
				/>
				<IoCaretForwardOutline
					className={index === 0 ? "disabled" : "enabled"}
					onClick={() => setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex))}
				/>
			</div>
		</div>
	);
})`
	background: black;
	color: #fff200;
	padding: 15px 20px 5px 20px;
	border-radius: 15px;
	box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
	user-select: none;
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
