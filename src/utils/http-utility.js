import axios from "axios";

const httpAuth = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 30000,
});

httpAuth.interceptors.request.use((conf) => {
  conf.headers = {
    "x-auth-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2I2ZDcxYWRlNmJhZjMzYWVmZWUxODAiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NzI5MzUyMjN9.WapkAwuIv73-WNJpZbV3GthLjSg0YmV7lXfALUg-m-c",
  };

  return conf;
});

export { httpAuth };
