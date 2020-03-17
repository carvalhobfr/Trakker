import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/wallet'
});

const addStock = async data => {
  console.log('service ', data);
  await instance.post('/add-stock', { data });
};

const loadStockInformation = async name => {
  const result = await instance.get(`/stock-information/${name}`);
  const stock = result.data.name;
  console.log(stock);
  return stock;
};
export { addStock, loadStockInformation };
