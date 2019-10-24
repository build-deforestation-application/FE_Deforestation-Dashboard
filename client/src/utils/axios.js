import axios from 'axios';

export default () => {
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL: 'api url',
    header: {
      Authorization: token,
    },
  });
};
