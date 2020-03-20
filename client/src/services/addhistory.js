import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/history'
});

const addDailyHistory = async data => {
  await instance.post('/add-daily', { data });
};

export { addDailyHistory };
