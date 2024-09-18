import axios from 'axios';

export const fetchData = () => (dispatch /* ,getState */) => {
  const config = {
    method: 'GET',
    url: 'https://salgado-app-server.vercel.app/data',
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
