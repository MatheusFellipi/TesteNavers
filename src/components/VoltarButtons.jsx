import React from 'react';

import { VoltarButton } from '../styles/components/stylesButtons';

export default function Buttons({name,type,hadleClick}) {
  return (
    <> 
      <VoltarButton type={type} onClick={hadleClick} >{name}</VoltarButton>
    </>
  );
}
