import { useState, useEffect } from "react";
import supabase from "../../../config/supabaseClient";

function useIncome() {
	const [total, setTotal] = useState([]);
	const [donations, setDonations] = useState([]);
	const [events, setEvents] = useState([]);
	const [subscriptions, setSubscriptions] = useState([]);
	const [subscriptionsType, setSubscriptionsType] = useState([]);
	const [balance, setBalance] = useState({});
	const [balanceTransactions, setBalanceTransactions] = useState([]);

	useEffect(() => {

		const eventsFetch = async () => {
			const { data, error } = await supabase.from("events").select("*").order("date", { ascending: false });
			if (error) console.error(error);
			setEvents(data);
		};

		// const donationsFetch = async () => {
		// 	const { data, error } = await supabase.rpc("donations_by_month");
		// 	if (error) console.error(error);
		// 	setDonations(data);
		// };

		// const subscriptionsFetch = async () => {
		// 	const { data, error } = await supabase.rpc("subscriptions_by_month");
		// 	if (error) console.error(error);
		// 	setSubscriptions(data);
		// };

		// const subscriptionsTypeFetch = async () => {
		// 	const { data, error } = await supabase.rpc("subscriptions_type_by_month");
		// 	if (error) console.error(error);
		// 	setSubscriptionsType(data);
		// };

		// const balanceFetch = async () => {
		// 	const { data, error } = await supabase.from("balance").select("*");
		// 	if (error) console.error(error);
		// 	setBalance(data[0]);
		// };

		// const balanceTransactionsFetch = async () => {
		// 	const { data, error } = await supabase
		// 		.from("balance_transactions")
		// 		.select("*")
		// 		.filter("type", "eq", "subscription");
		// 	if (error) console.error(error);
		// 	setBalanceTransactions(data);
		// };

		// subscriptionsTypeFetch();
		// subscriptionsFetch();
		// donationsFetch();
		// balanceFetch();
		// balanceTransactionsFetch();
		eventsFetch();
	}, []);

	return { events, total };
}

export default useIncome;
