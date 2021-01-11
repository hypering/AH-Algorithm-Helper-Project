import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContainer from './components/MainContainer';

function App() {
  const [curIp, setIp] = useState('');
  const [loading, setLoading] = useState(false);
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
      <Header />
      <MainContainer curIp={curIp} />
      <Footer />
    </>
  );
}

export default App;
