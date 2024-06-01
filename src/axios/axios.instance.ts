import axios, { AxiosInstance } from 'axios';

// 로그인 한 유저가 사용하는 axiosInstance
const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://hackathon-m-back-server.store/',
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    config.headers['Authorization'] = '1';

    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);

// intercepter에서 토큰 관련 에러 처리
axiosInstance.interceptors.response.use(
  async (response) => {
    return response.data;
  },

  async (error) => {
    console.log(error.response);
    return Promise.reject(error);
  },
);

export default axiosInstance;
