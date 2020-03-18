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
  /* const result = await axios.get(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${name}&apikey=${process.env.STOCK_API}`
  );
  const dailyStock = result.data;
  console.log(dailyStock); */
};

export { requestDaily };
