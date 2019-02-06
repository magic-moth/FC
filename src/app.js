import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import timesTableGen from './components/timesTableGen';
import Dealer from './components/dealer/main';

const Wrapper = styled.div`
  display: flex;
  background: #001628;
  height: 100vh;
  width: 100vw;
  justify-content: center;
`;

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Dealer />
      </Wrapper>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));