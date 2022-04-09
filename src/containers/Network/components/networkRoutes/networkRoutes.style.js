import styled from 'styled-components'
import { palette } from 'styled-theme'

export const NetworkCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: .4rem;
  max-width: 370px;
  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    text-transform: capitalize;
    color: ${palette('grayscale', 10)};
    margin-bottom: .3rem;
  }
  .sub-title {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    padding: 0.5rem 0.25rem;
    border-radius: 6px;
    transition: all 0.2s ease;
    button {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 4px;
      background-color: ${palette('grayscale', 1)};
      outline: none;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.2s ease;
      svg {
        color: ${palette('grayscale', 6)};
        transition: all 0.2s ease;
      }
    }
    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
      color: ${palette('grayscale', 7)};
      transition: all 0.2s ease;
      text-transform: capitalize;
    }
    &:hover {
      background-color: ${palette('primary', 4)};
      button {
        background-color: white;
      }
      svg {
        color: ${palette('primary', 1)};
      }
      p {
        color: ${palette('primary', 0)};
      }
    }
  }
  .ant-divider {
    margin: 8px 0;
  }
`
