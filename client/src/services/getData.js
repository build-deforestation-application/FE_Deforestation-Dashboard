import axios from 'axios';

export default async () => {
  const result = await axios
    .get(
      'https://raw.githubusercontent.com/coopwilliams/Deforestation_BE/master/countries02.geo.json',
    )
    .then(res => res);

  return result;
};
