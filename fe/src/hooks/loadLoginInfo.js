import API from '../lib/api';

const loadLoginInfo = async (dispatch) => {
  const result = await API.get('user');
  dispatch({ type: 'SET_IS_LOGINED', payload: result });
};

export default loadLoginInfo;
