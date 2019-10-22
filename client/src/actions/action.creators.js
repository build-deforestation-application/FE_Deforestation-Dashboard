import axios from 'axios';
import { FETCH_PENDING, FETCH_SUCCESS, FETCH_FAILURE } from './action.types';

export const fetchTrace = () => dispatch => {
  dispatch({ type: FETCH_PENDING });

  axios
    .get(
      'https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json',
    )
    .then(res => {
      dispatch({ type: FETCH_SUCCESS, payload: res.data.features });
    })
    .catch(err => {
      dispatch({ type: FETCH_FAILURE, payload: err.response });
    });
};

export const placeHolder = () => {
  return 'string';
};
