import { useState } from 'react';

const useToggle = (initialValue: boolean): [boolean, (value?: boolean) => void] => {
  const [value, setValue] = useState(initialValue);

  const toggle = (value?: boolean) => setValue(prev => (typeof value === 'boolean' ? value : !prev));

  return [value, toggle];
};

export default useToggle;
