import axios from 'axios';

export default async () => {
  const result = await axios
    .get(
      'https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json',
    )
    .then(res => res);

  return result;
};
