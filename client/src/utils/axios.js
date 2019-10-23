import axios from 'axios';

export default () => {
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL: 'https://be-deforestation.herokuapp.com',
    header: {
      Authorization: token,
    },
  });
};
