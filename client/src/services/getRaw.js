import axios from 'axios';

export default async () => {
  const result = await axios
    .get('https://be-deforestation.herokuapp.com/query/')
    .then(res => res);

  return result;
};
