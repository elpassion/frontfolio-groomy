import React, { Component } from 'react';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #c0c0c0;
`;

export default App;
