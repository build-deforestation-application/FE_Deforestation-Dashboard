import axios from 'axios';

export default () => {
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL: null,
    header: {
      Authorization: token,
    },
  });
};
