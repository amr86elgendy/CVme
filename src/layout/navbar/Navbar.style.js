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
      max-width: 230px;
      background: ${palette('grayscale', 1)};
    }

    svg {
      position: absolute;
      top: 50%;
      left: 0.5rem;
      transform: translateY(-50%);
      color: ${palette('grayscale', 5)};
    }
  }
  ul.main-links {
    display: flex;
    align-items: center;
    gap: 2rem;
    li {
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
      color: ${palette('grayscale', 7)};
      &:hover {
        background-color: ${palette('primary', 4)};
        color: ${palette('primary', 0)};
      }
    }
    a.active li {
      color: ${palette('primary', 0)};
      background-color: ${palette('primary', 4)};
    }
  }
  .profileNotiWraper {
    display: inline-flex;
    gap: 0.5rem;
    height: 100%;
    align-items: center;
    position: relative;
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
