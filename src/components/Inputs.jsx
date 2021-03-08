import React from 'react';

import { Label,Input } from '../styles/components/stylesInput';

export default function Inputs({name,type}) {
  return (
    <>  
        <Label htmlFor={name} >
          {name}
          <Input 
            type={type}
            name={name}
          >
          </Input>
        </Label>
    </>
  );
}
