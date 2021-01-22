const loadLoginInfo = (dispatch) => {
  fetch(`${process.env.BASE_URL}/user`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    credentials: 'include',
  })
    .then((response) => response.json())
    .then((json) => {
      dispatch({ type: 'SET_IS_LOGINED', payload: json });
    });
};
export default loadLoginInfo;
