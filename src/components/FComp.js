import React, {useContext, useState} from 'react'
import styled from 'styled-components'
import { MainContext } from '../App'
import inheritCss from '../inheritCss'

const FCompStyle = styled.div`
  ${inheritCss}

  background: #EEEEEE;
  color: black;
`;

const Button= styled.button`
  margin: 15px;
`;

const FComp = () => {
  const {dispatch} = useContext(MainContext)
  const [changeOption, setChangeOption ] = useState('a');
  
  return (
    <FCompStyle>
      <div>I am the inner most child component.</div>
      <Button onClick={() => dispatch(changeOption)}>Change Parent</Button>
      <select value={changeOption} 
        onChange={(e) => setChangeOption(e.target.value)}>
        <option value='a'>First Change</option>
        <option value='b'>Second Change</option>
        <option value='c'>Third Change</option>
      </select>
      <Button onClick={() => dispatch('reset')}>Reset</Button>

  </FCompStyle>
  )
}

export default FComp