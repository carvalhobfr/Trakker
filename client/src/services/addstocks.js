import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/wallet'
});

const addStock = async data => {
  console.log('service ', data);
  await instance.post('/add-stock', { data });
};

const loadWalletInformation = async id => {
  const result = await instance.get(`/${id}`);
  //console.log(wallet);
  const wallet = result.data.id;
  return wallet;
};

const loadStockInformation = async id => {
  const result = await instance.get(`/singlestock/${id}`);
  const stock = result.data.id;
  console.log(stock);
  return stock;
};
export { addStock, loadStockInformation, loadWalletInformation };
