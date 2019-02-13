import React from 'react';
import styled from 'styled-components';
import Router from 'react-router';
import axios from 'axios';


const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Button = styled.button`
  background: lightgray;
  border: 1px solid black;
`;

class Navbar extends React.Component {
  constructor() {
    super()

  }

  render() {
    return (
      <div>
        <Wrapper>
          <Button>
            Create Flash Card Pack
          </Button>
        </Wrapper>
      </div>
    )
  }
}

export default Navbar