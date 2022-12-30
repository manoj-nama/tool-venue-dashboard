import axios from "axios";

const httpAuth = axios.create({
  //   baseURL: "localhost:3000/home",
  timeout: 30000,
});

httpAuth.interceptors.request.use((conf) => {
  //   conf.headers = {
  //     token: `${token}`,
  //   };

  return conf;
});

export { httpAuth };
