import styled from 'styled-components';
import { palette } from 'styled-theme';
import { Typography, Button, Dropdown, Menu } from 'antd';
export const wrapper = styled.div``;

export const StyledNav = styled.nav`
  padding: 16px 0;
  p {
    color: ${palette('grayscale', 5)};
    font-size: 16px;
    font-weight: 600;
    @media (max-width: 667.99px) {
      font-size: 12px;
    }
  }
  a {
    color: ${palette('primary', 0)};
    font-size: 16px;
    font-weight: 700;
    @media (max-width: 667.99px) {
      font-size: 14px;
    }
  }
`;

export const LangButton = styled(Button)`
  && {
    width: 122px;
    background-color: ${palette('grayscale', 1)};
    border-color: ${palette('grayscale', 1)};
    font-size: 14px;
    font-weight: 600;
    color: ${palette('text', 0)};
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

    .anticon-down {
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

export const DropdownWrapper = styled(Dropdown)`
  display: inline-block;
  margin-left: 32px;
  @media (max-width: 667.99px) {
    margin-left: 8px;
  }
`;

const DropdownMenus = (ComponentName) => styled(ComponentName)``;

export const DropdownMenu = DropdownMenus(Menu);
export const MenuItem = DropdownMenus(Menu.Item);
