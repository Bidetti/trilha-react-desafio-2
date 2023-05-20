import React from 'react'

import { InputContainer } from './styles';

function Input({value, onChange}) {
  return (
    <InputContainer>
        <input value={value} onChange={onChange} placeholder='Exemplo: Bidetti/trilha-react-desafio-2'/>
    </InputContainer>
  )
}

export default Input
