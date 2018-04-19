import React from 'react';
import styled, { keyframes } from 'styled-components';

const scaleout = keyframes`
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1.0);
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 100;
  width: 60px;
  height: 60px;
  margin: -30px 0 0 -30px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 100%;
  animation: ${scaleout} 1000ms infinite ease-in-out;
`;

const Spinner = () => (
  <Wrapper />
);

export default Spinner;
