import { useState } from 'react';

const onChangeHook = () => {
  const [value, setValue] = useState('');

  const handler = (e) => {
    setValue(e.target.value);
  };

  return [value, handler, setValue];
};

export default onChangeHook;
