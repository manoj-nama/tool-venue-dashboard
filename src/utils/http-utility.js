import axios from "axios";
const httpAuth = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

httpAuth.interceptors.request.use((conf) => {
  const token = localStorage.getItem('auth');
  if (token) {
    conf.headers = {
      'x-auth-token': `${token}`
    }
  }
  return conf;
});

export { httpAuth };