import React from "react";
import styled from "styled-components";

const TodoRow = ({ todo }) => {
  return <Container>{todo}</Container>;
};

const Container = styled.div``;

export default TodoRow;