import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
	const [data, setData] = useState({});
	useEffect(() => {
		fetch(
			`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
		)
			.then((res) => res.json())
			//To parse the json data
			.then((res) => setData(res[currency]));
		// To hold the data we declare data using useState to return value
		// [] is used to access the data from the API

		console.log(data);
	}, [currency]);
	console.log(data);
	return data;
}
export default useCurrencyInfo;
