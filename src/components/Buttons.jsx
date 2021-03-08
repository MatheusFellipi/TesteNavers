import React from 'react';

import { Button } from '../styles/components/stylesButtons';

export default function Buttons({name,type,hadleClick}) {
  return (
    <> 
      <Button type={type} onClick={hadleClick} >{name}</Button>
    </>
  );
}
