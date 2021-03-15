import { useState } from 'react';

const useOnChange = () => {
  const [value, setValue] = useState('');

  const handler = (e) => {
    setValue(e.target.value);
  };

  return [value, handler, setValue];
};

export default useOnChange;
