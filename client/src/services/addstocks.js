import axios from 'axios';
const _ = require('lodash');

const instance = axios.create({
  baseURL: '/api/wallet'
});

const addStock = async data => {
  await instance.post('/add-stock', { data });
};

const removeStock = async data => {
  await instance.post('remove-stock', { data });
};

const loadUniqueStockInformation = id =>
  new Promise((resolve, reject) => {
    instance
      .get(`/allstocks/${id}`)
      .then(result => {
        const stocks = result.data.stocks;
        let unique = _.uniqBy(stocks, 'name');
        resolve(unique);
      })
      .catch(reject);
  });

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

const loadWalletInformation = async id =>
  new Promise((resolve, reject) => {
    instance
      .get(`/${id}`)
      .then(result => {
        const wallet = result.data.wallet;
        resolve(wallet);
      })
      .catch(reject);
  });

export {
  addStock,
  removeStock,
  loadStockInformation,
  loadUniqueStockInformation,
  loadAllStockInformation,
  loadWalletInformation
};
