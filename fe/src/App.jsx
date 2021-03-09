import React, { useState, useEffect } from 'react';
import MainContext from './context/index';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContainer from './components/MainContainer';
import API from './lib/api';

function App() {
  const [curIp, setIp] = useState('');

  const getIP = async () => {
    const ip = await API.get('getip', {});
    setIp(ip.ip);
  };

  useEffect(() => {
    getIP();
  }, []);

  return (
    <>
      <MainContext>
        <Header />
        <MainContainer curIp={curIp} />
        <Footer />
      </MainContext>
    </>
  );
}

export default App;
