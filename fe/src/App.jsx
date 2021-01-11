import React, { useState, useContext, useReducer } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContainer from './components/MainContainer';
export const UserDispatch = React.createContext(null);
export const IsLoginedState = React.createContext(null);
const loginReducer = (isLogined, { type, payload }) => {
  switch (type) {
    case 'SET_IS_LOGINED':
      return { isLogined: payload };
    default:
      return isLogined;
  }
};
function App() {
  const [curIp, setIp] = useState('');
  const [loading, setLoading] = useState(false);

  const [isLogined, dispatch] = useReducer(loginReducer, { isLogined: false });

  if (!loading) {
    fetch('//127.0.0.1:4000/getip', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => setIp(res.ip))
      .then(setLoading(true));
  }

  return (
    <>
      <UserDispatch.Provider value={dispatch}>
        <IsLoginedState.Provider value={isLogined}>
          <Header />
          <MainContainer curIp={curIp} />
          <Footer />
        </IsLoginedState.Provider>
      </UserDispatch.Provider>
    </>
  );
}

export default App;
