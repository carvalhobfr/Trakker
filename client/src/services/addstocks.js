import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/wallet'
});

const addStock = async data => {
  await instance.post('/add-stock', { data });
};

const loadAllStockInformation = id =>
  new Promise((resolve, reject) => {
    instance
      .get(`/allstocks/${id}`)
      .then(result => {
        const stocks = result.data.stocks;
        resolve(stocks);
      })
      .catch(reject);
  });

const loadStockInformation = async (id, name) =>
  new Promise((resolve, reject) => {
    instance
      .get(`/singlestock/${id}/${name}`)
      .then(result => {
        const stock = result.data.stock;
        resolve(stock);
      })
      .catch(reject);
  });
export { addStock, loadStockInformation, loadAllStockInformation };
