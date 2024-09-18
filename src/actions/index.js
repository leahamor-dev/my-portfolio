import axios from 'axios';

export const fetchData = () => (dispatch /* ,getState */) => {
  const config = {
    method: 'GET',
    url: 'http://localhost:5000/data',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  axios(config)
    .then((response) => {
      dispatch({
        type: 'ADD_DATA',
        data: response.data.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
