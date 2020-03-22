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

const loadSingleInfo = name =>
  new Promise((resolve, reject) => {
    instance
      .post(`/daily-data/${name}`)
      .then(result => {
        const singleInfo = result.data;
        resolve(singleInfo);
      })
      .catch(reject);
  });

export { loadDailyInfo, loadSingleInfo };
