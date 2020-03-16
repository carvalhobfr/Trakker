import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/wallet'
});

const addStock = data =>
  new Promise((resolve, reject) => {
    instance
      .post('/add-stock', data)
      .then(result => {
        const stock = result.data.stock;
        resolve(user);
      })
      .catch(reject);
  });

export { addStock };
