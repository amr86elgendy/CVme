import axios from 'axios';

// import { actionTypes } from 'redux/auth/actions';

const client = axios.create({
  baseURL: 'https://cvmetest2.troylab.org/api', //process.env.REACT_APP_BASE_BE_API,
  headers: {
    Authorization: `Bearer i5qMjITIWGMjw2Brs02JdZZ7RMtcM70lif3M8geBluh0lU92mu`,
  },
  validateStatus: (status) => {
    if (status === 401 || status === 403) {
      // logout
      // history.push('/signin')
      // dispatch({
      //   type: actionTypes.LOGOUT,
      // });
      return false;
    }
    if (status >= 200 && status <= 300) return true;
    return false;
  },
});
export default client;

// const request = ({ ...options }) => {
//   const token = localStorage.getItem('@cvme__token') || null;
//   client.defaults.headers.common.Authorization = `Bearer ${token}`;
//   client.defaults.headers.Language = 'en';
//   client.defaults.headers['User-Agent-Type'] = 'web';

//   return client(options);
// };

// export default request;
