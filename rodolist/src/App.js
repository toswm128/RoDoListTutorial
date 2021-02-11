import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(https://source.unsplash.com/random/1920x1920);
  background-size: cover;
`;

class App extends React.Component {
  render() {
    return <Container></Container>;
  }
}

export default App;
