import { Button } from 'antd';
import styled, { css } from 'styled-components';
import { palette } from 'styled-theme';

export const StyledNav = styled.nav`
  background-color: ${palette('grayscale', 0)};
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
  }
  .logo-wraper {
    display: flex;
    gap: 1rem;
  }
  form {
    position: relative;
    input {
      display: inline-block;
      width: 100%;
      max-width: 230px;
      padding: 0.5rem 1rem 0.5rem 2.25rem;
      color: rgba(0, 0, 0, 0.85);
      background: #f2f3f7;
      border-radius: 6px;
      outline: 0;
      border: 1px solid #f2f3f7;
      transition: all 0.2s ease;
      &:hover {
        border: 1px solid #664087;
      }
      &:focus {
        border-color: #664087;
        box-shadow: 0 0 0 2px rgb(81 38 123 / 20%);
      }
    }
    svg {
      position: absolute;
      top: 50%;
      left: 0.5rem;
      transform: translateY(-50%);
      color: ${palette('grayscale', 5)};
    }
  }
  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .profileNotiWraper {
    display: inline-flex;
    gap: 0.5rem;
    height: 100%;
    align-items: center;
    position: relative;
    button.notiWraper {
      display: inline-flex;
      align-items: center;
      justify-content: space-around;
      padding: 4px;
      background-color: ${palette('grayscale', 1)};
      outline: none;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      @media (max-width: 667.99px) {
        width: auto;
      }
    }
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  text-transform: capitalize;
  cursor: pointer;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  background-color: ${(props) => (props.active ? palette('primary', 4) : '')};
  color: ${palette('grayscale', 7)};
  ${(props) =>
    props.active &&
    css`
      /* font-weight: 600; */
      color: ${palette('primary', 0)};
    `};
  &:hover {
    background-color: ${palette('primary', 4)};
    color: ${palette('primary', 0)};
  }
`;

export const ProfileButton = styled(Button)`
  && {
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
    width: 64px;
    height: 36px;
    padding: 4px;
    background-color: ${palette('grayscale', 1)};
    border-color: ${palette('grayscale', 1)};
    font-size: 14px;
    font-weight: 600;
    color: ${palette('text', 0)};
    border-radius: 6px;
    @media (max-width: 667.99px) {
      width: auto;
    }
    &:hover,
    &:active,
    &:focus {
      border-color: ${palette('grayscale', 1)};
      background-color: ${palette('grayscale', 1)};
      color: ${palette('text', 0)};
    }

    svg {
      font-size: 14px;
      font-weight: 600;
      color: ${palette('text', 0)};
    }
  }
  .ant-dropdown-menu-item {
    a {
      font-size: 14px;
      color: ${palette('text', 0)};
    }
  }

  .ant-dropdown-menu-item,
  .ant-dropdown-menu-submenu-title {
    a {
      font-size: 14px;
      color: ${palette('text', 0)};
    }

    &:hover {
      background-color: ${palette('secondary', 0)};
    }
  }
`;
