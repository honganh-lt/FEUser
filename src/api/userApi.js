// src/api/userApi.js
// import AlbumFeature from 'feature/Album/pages';
import axiosClient from './axiosClient';

const userApi = {
  register(data) {
    const url = '/auth/local/register'; 
    return axiosClient.post(url, data);
  },

  login(data) {
    const url = '/auth/local'; 
    return axiosClient.post(url, data);
  },
  album(data) {
    const url = '/albums';
    return axiosClient.post(url, data);
},
  // exam(data) {
  //   const url = '/exams';
  //   return axiosClient.post(url, data);
  // },
};

export default userApi;
