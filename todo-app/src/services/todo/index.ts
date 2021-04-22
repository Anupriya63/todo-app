import Axios from 'axios';

const returnAxiosInstance = () =>
  Axios.create({
    baseURL: 'http://localhost:5005',
    timeout: 15000,
  });

export const deleteRequest = (url:string) => {
  const axios = returnAxiosInstance();
  return axios.delete(url);
};

export const putRequest = (url: string, requestData: any) => {
  const axios = returnAxiosInstance();
  return axios.put(url, requestData);
};

export const getRequest = (url: string) => {
  const axios = returnAxiosInstance();
  return axios.get(url);
};

export const postRequest = (url: string, requestData: any) => {
  const axios = returnAxiosInstance();
  return axios.post(url, requestData);
};

