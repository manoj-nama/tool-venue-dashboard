import axios from "axios";
const token = localStorage.getItem('auth');

const httpAuth = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

httpAuth.interceptors.response.use((conf) => {
  if(token){
    conf.headers['authorisation'] = token;
  }
  return conf;
});

export { httpAuth };