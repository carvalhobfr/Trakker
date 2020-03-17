import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.alphavantage.co/query?'
});

const requestDaily = async name => {
  const result = await instance.get(
    `function=TIME_SERIES_DAILY&symbol=${name}&apikey=${process.env.STOCK_API}`
  );
  const dailyStock = result.data;
  console.log(dailyStock);
};

export { requestDaily };
