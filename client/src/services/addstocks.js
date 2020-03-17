import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/wallet'
});

const addStock = async data => {
  console.log('service ', data);
  await instance.post('/add-stock', { data });
};

/* const loadWalletInformation = async id => {
  const result = await instance.get(`/${id}`);
  console.log(wallet);
  const wallet = result.data.id;
  return wallet;
}; */

const loadAllStockInformation = id =>
  new Promise((resolve, reject) => {
    instance
      .get(`/allstocks/${id}`)
      .then(result => {
        console.log(result);
        const stocks = result.data.stocks;
        resolve(stocks);
      })
      .catch(reject);
    /* const result = await instance.get(`/allstocks/${id}`);
  const stocks = result.data.id;
  console.log(stocks);
  return { stocks }; */
  });

const loadStockInformation = async id => {
  const result = await instance.get(`/singlestock/${id}`);
  const stock = result.data.id;
  console.log(stock);
  return stock;
};
export { addStock, loadStockInformation, loadAllStockInformation };
