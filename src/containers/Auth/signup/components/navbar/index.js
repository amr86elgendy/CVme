import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Col, Row } from 'antd';
import { IoChevronDown } from 'react-icons/io5';

import logo from 'assets/images/cv-me-logo.png';
import {
  TextRight,
  LangButton,
  DropdownWrapper,
  DropdownMenu,
  MenuItem,
  StyledNav,
} from './navbar.style';
import Button from 'styles/components/button';

const { Header } = Layout;

function handleMenuClick(e) {}
const menu = (
  <DropdownMenu onClick={handleMenuClick}>
    <MenuItem key='1'>Arabic</MenuItem>
  </DropdownMenu>
);

function Nav() {
  return (
    <StyledNav>
      <div className='container'>
        <Row justify='space-between'>
          <Col>
            <Link to='/'>
              <img src={logo} alt='logo' />
            </Link>
          </Col>
          <Col>
            <p className='p'>
              Already have an account? <Link to='/signin'>Login</Link>
            </p>
            <DropdownWrapper overlay={menu} trigger={['click']}>
              <Button secondary color='grayscale' scale={11}>
                English <IoChevronDown />
              </Button>
            </DropdownWrapper>
          </Col>
        </Row>
      </div>
    </StyledNav>
  );
}

export default Nav;
