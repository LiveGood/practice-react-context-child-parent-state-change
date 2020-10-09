import React, { createContext, useReducer, useContext } from 'react'
import GlobalStyle from './GlobalStyle'
import styled from 'styled-components'
import FComp from './components/FComp'
import inheritCss from './inheritCss'

const App = styled.div`
  ${GlobalStyle}
  text-align: center;
  margin-top: 20px;
`;

const AComp = styled.div`
  ${inheritCss}

  width: 1000px !important;
  height: 650px;
  padding: 40px;
  background: #49A54D;
  text-transform: uppercase;
  font-weight: bold;
`;

const BComp = styled.div`
  ${inheritCss}

  background: #FC9209;
`;

const CComp = styled.div`
  ${inheritCss}

  background: #E8413D;
`;

const DComp = styled.div`
  ${inheritCss}

  background: #00ACC1;
`;

const EComp = styled.div`
  ${inheritCss}

  background: dimgrey;
  color: #A33DB7;
`;

const ChangedValue = styled.div`
  color: ${props => props.color ? props.color : ''};
  padding-bottom: 10px;
`;

const TopComponent = () => {
  const {stateValue} = useContext(MainContext);
  const { content, color } = stateValue;
  return (
    <AComp>
      <ChangedValue color={color}>{content}</ChangedValue>
      <BComp>
        <CComp>
          <DComp>
            <EComp>
              <FComp />
            </EComp>
          </DComp>
        </CComp>
      </BComp>
    </AComp>
  )
};

export const MainContext = createContext();
const initialState = {
  content: "I am the Initally stated parent",
  color: "black"
};
const reducer = (state, action)  => {
  const changeMessage = initialState.content + "but now I'm changed to: "
  switch (action) {
    case 'a':
      return {
        content: changeMessage  +" First State",
        color: '#3C4858'
      }
    case 'b':
      return {
        content: changeMessage + " Second State",
        color: '#89229b'
      }
    case 'c':
      return {
        content: changeMessage + " Third State",
        color: '#f44336'
      }
    case 'reset':
      return initialState
    default:
      return state
  }
};

export default () => {
  const [stateValue, dispatch] = useReducer(reducer, initialState);
  return (
    <App>
      <MainContext.Provider value={{stateValue, dispatch}}>
        <TopComponent />
      </MainContext.Provider>
    </App>
  )
};
