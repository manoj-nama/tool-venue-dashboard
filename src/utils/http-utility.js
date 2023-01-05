import axios from "axios";

const httpAuth = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 30000,
});

httpAuth.interceptors.request.use((conf) => {
  //   conf.headers = {
  //     token: `${token}`,
  //   };

  return conf;
});

export { httpAuth };
