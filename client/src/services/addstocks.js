import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/wallet'
});

const addStock = async data => {
  await instance.post('/add-stock', { data });
};

const loadStockInformation = id =>
  new Promise((resolve, reject) => {
    instance
      .get(`/stock-information/${id}`)
      .then(result => {
        const stock = result.data.stock;
        resolve(stock);
      })
      .catch(reject);
  });

export { addStock, loadStockInformation };
