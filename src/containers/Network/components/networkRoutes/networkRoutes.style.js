import styled from 'styled-components'
import { palette } from 'styled-theme'
import Card from 'styles/components/card'

export const NetworkCardWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  
  .heading-1 {
    margin-bottom: 0.5rem;
  }
  .sub-title {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    padding: 0.5rem 0.25rem;
    border-radius: 6px;
    transition: all 0.2s ease;
    margin-bottom: 0.5rem;
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
    &:hover, &.active {
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
`;
