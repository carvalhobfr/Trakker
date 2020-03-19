import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/graph'
});

const loadDailyInfo = () =>
  new Promise((resolve, reject) => {
    instance
      .post(`/daily-data`)
      .then(result => {
        const dailyData = result.data;
        resolve(dailyData);
      })
      .catch(reject);
  });

export { loadDailyInfo };
