import React, { useState, useEffect } from 'react';
import MainContext from './context/index';
import Header from './components/Header';
import Footer from './components/Footer';
import API from './lib/api';
import { MainPage } from 'pages';

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
        <MainPage curIp={curIp} />
        <Footer />
      </MainContext>
    </>
  );
}

export default App;
