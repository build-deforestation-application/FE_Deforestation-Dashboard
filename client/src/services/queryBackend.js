import axios from '../utils/axios';

const baseURL = `https://be-deforestation.herokuapp.com`;

// Send query to web BE with body req of DS query
export const getter = async () => {
  const result = await axios().get(`${baseURL}/query`).then(res => res)
  return result;
}

export const post = async (endpoint, query) => {
  const result = await axios().post(`${baseURL}/${endpoint}`, query).then(res => res);

  return result;
};

export const put = async (id, query) => {
  const result = axios().put(`${baseURL}/${id}`, query).then(res => res);

  return result;
};

export const del = async id => {
  const result = await axios()
    .delete(`${baseURL}/${id}`)
    .then(res => res)
    .catch(err => console.error('error deleting query', err));

  return result;
};