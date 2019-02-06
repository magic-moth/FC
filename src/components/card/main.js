import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 70em;
  width: 70em;
  border: 1px solid orange;
  background: rgba(255,255,255, 0.05);
  padding: 2em;
  justify-content: space-between;
`;

const Question = styled.div`
  background: rgba(255,255,255, 0.05);
  height: 3em
  font-size: 5em;
  text-align: center;
`;

const InputBox = styled.div`
  background: rgba(255,255,255, 0.05);
  font-size: 5em;
  text-align: center;
`;

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Wrapper>
        <Question>
          Question goes here?
        </Question>
        <InputBox>
          User Input goes here
        </InputBox>
      </Wrapper>
  )}
}

export default Card;