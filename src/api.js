import axios from 'axios';

const api = axios.create({
  baseURL: 'https://taskmanager-backend-1-cz3z.onrender.com/api',
});

export default api;
