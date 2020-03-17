import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.alphavantage.co/query?function='
});

const requestDaily = async name => {
  const data = await instance.get(
    `TIME_SERIES_DAILY&symbol=${name}&apikey=${process.env.STOCK_API}`
  );
};

export { requestDaily };
