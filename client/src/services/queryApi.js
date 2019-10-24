import axios from 'axios';

export default async () => {
  const result = await axios
    .get('https://countries-api-test.herokuapp.com/api/countries')
    .then(res => res);

  return result;
};
