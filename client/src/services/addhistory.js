import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/history'
});

const addDailyHistory = async name => {
  await instance.post('/add-daily', { name });
};

export { addDailyHistory };
