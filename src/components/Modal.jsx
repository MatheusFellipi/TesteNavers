import React from 'react';

// import { Container } from './styles';

export default function Modal({modalRef}) {
  return (
    <div ref={modalRef}>
      <p>meu modal</p>
    </div>
  );
}

