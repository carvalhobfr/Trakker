import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/history'
});

const addDailyHistory = async name => {
  await instance.post('/add-daily', { name });
};

const loadDailyHistory = async name =>
  new Promise((resolve, reject) => {
    instance
      .get(`/daily/${name}`)
      .then(result => {
        const daily = result.data.daily;
        resolve(daily);
      })
      .catch(reject);
  });

export { addDailyHistory, loadDailyHistory };
