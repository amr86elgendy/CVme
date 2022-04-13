import styled, { css } from 'styled-components';
import { font, palette } from 'styled-theme';

const Button = styled.button`
  background-color: transparent;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  transition: all 0.2s ease;
  outline: 0;
  border: 0;
  cursor: pointer;

  ${({ primary }) =>
    primary &&
    css`
      background-color: ${palette('primary', 0)};
      color: white;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
    `}

  ${({ secondary, color = 'primary', scale = 1 }) =>
    secondary &&
    css`
      background-color: ${palette('grayscale', 1)};
      color: ${palette(color, scale)};
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
    `}

  ${({ acceptConnetion }) =>
    acceptConnetion &&
    css`
      background-color: white;
      color: ${palette('color', 14)};
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      border: 1px solid ${palette('color', 14)};
    `}
    ${({ ignore }) =>
    ignore &&
    css`
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: ${palette('grayscale', 7)};
      font-family: ${font('primary', 0)} !important;
    `}

    ${({ link }) =>
    link &&
    css`
      padding: 0;
      font-weight: 700;
      font-size: 16px;
      line-height: 16px;
      color: ${palette('primary', 1)};
    `}
`;

export default Button;
