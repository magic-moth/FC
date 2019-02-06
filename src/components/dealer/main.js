import React from 'react';
import styled from 'styled-components';

import Card from '../card/main';

const Wrapper = styled.div`
  display: flex;
  border: 1px solid white;
  height: 95vh;
  width: 95vw;
  background: rgba(255,255,255, 0.05);
  justify-content: center;
`;

class Dealer extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Wrapper>
        <Card />
      </Wrapper>
    )
  }
}

export default Dealer;