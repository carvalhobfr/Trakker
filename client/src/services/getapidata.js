import axios from 'axios';
require('dotenv').config();

const instance = axios.create({
	baseURL: 'https://www.alphavantage.co/query?'
});

const requestDaily = async name => {
	new Promise((resolve, reject) => {
		instance
			.get(`TIME_SERIES_DAILY&${name}&${process.env.STOCK_API}`)
			.then(result => {
				console.log(result);
				const currentStocks = result.data.currentStocks;
				resolve(currentStocks);
			})
			.catch(reject);
	});
	const result = await axios.get(
		`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${name}&apikey=${process.env.STOCK_API}`
	);
  const dailyStock = result.data;
  const info =  dailyStock["Time Series (Daily)"]
  const firstKey = Object.keys(info)[0]
  const data = info[firstKey]["4. close"]
  console.log(data)
  // console.log('DailyStock em GetAPIxDATA', dailyStock);
	//console.log('DailyStock em GetAPIDATA', dailyStock["Time Series (Daily)"][0]);
};

export { requestDaily };
