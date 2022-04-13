import styled from 'styled-components';
import { palette } from 'styled-theme';

const LoaderComponent = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .spinner {
    width: 50px;
    height: 50px;
    position: relative;
    margin: auto;
  }
  .spinner div {
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 8px solid transparent;
    border-top-color: ${palette('primary', 0)};
    border-radius: 50%;
    animation: spinnerOne 1s linear infinite;
  }
  .spinner div:nth-child(2) {
    border: 8px solid transparent;
    border-bottom-color: ${palette('primary', 0)};
    animation: spinnerTwo 1s linear infinite;
  }

  @keyframes spinnerOne {
    0% {
      transform: rotate(0deg);
      border-width: 10px;
    }
    50% {
      transform: rotate(180deg);
      border-width: 1px;
    }
    100% {
      transform: rotate(360deg);
      border-width: 10px;
    }
  }
  @keyframes spinnerTwo {
    0% {
      transform: rotate(0deg);
      border-width: 1px;
    }
    50% {
      transform: rotate(180deg);
      border-width: 10px;
    }
    100% {
      transform: rotate(360deg);
      border-width: 1px;
    }
  }
`;

export default LoaderComponent;
