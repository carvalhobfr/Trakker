import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/wallet'
});

const addStock = data =>
  new Promise((resolve, reject) => {
    console.log('data', data);
    instance
      .post('/add-stock', data)
      .then(result => {
        console.log(result);
        const stock = result.data.stock;
        //console.log(stock);
        resolve(stock);
      })
      .catch(reject);
  });

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
