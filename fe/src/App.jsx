import React, { useState, useReducer, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContainer from './components/MainContainer';
import API from './lib/api';

export const UserDispatch = React.createContext(null);
export const IsLoginedState = React.createContext(null);

const loginReducer = (isLogined, { type, payload }) => {
  switch (type) {
    case 'SET_IS_LOGINED':
      return payload;
    default:
      return isLogined;
  }
};

function App() {
  const [curIp, setIp] = useState('');

  const [isLogined, dispatch] = useReducer(loginReducer, {
    isLogined: false,
    userKey: '',
    userId: '',
    profile: '',
  });

  const getIP = async () => {
    const ip = await API.get('getip', {});
    setIp(ip.ip);
  };

  useEffect(() => {
    getIP();
  }, []);

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
