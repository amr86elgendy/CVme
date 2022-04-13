import { Avatar, Dropdown, Menu } from 'antd'
import {
  LangMenuChevDown,
  TopbarNotifyIcon,
  TopbarSearchIcon,
} from 'assets/icons'
import React from 'react'
import avatar from 'assets/images/home/avatar-rect.png'
import { actions } from 'redux/auth/authSlice'
import { useDispatch } from 'react-redux'
import logo from 'assets/images/cv-me-logo.png'
import { ListItem, ProfileButton, StyledNav } from './Navbar.style'
import { mainLinks } from './constants'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const handleMenuClick = ({ key }) => {
    switch (key) {
      case 'logout':
        dispatch(actions.logout())
        break

      default:
        break
    }
  }

  const menuList = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  )

  return (
    <StyledNav>
      <div className="container">
        <div className="logo-wraper">
          <img src={logo} alt="logo" />
          <form>
            <input type="text" placeholder="Search CVme" />
            <TopbarSearchIcon size={22} />
          </form>
        </div>

        <ul className='main-links'>
          {mainLinks.map((item) => (
            <NavLink to={item.path} key={item.label}>
              <li>
                {item.icon}
                {item.label}
              </li>
            </NavLink>
          ))}
        </ul>
        <div className="profileNotiWraper">
          <button className="noti-wrapper">
            <TopbarNotifyIcon size={25} />
          </button>
          <Dropdown overlay={menuList} trigger={['click']}>
            <ProfileButton>
              <span className="avatar-item">
                <Avatar shape="square" size={28} src={avatar} />
              </span>{' '}
              <LangMenuChevDown />
            </ProfileButton>
          </Dropdown>
        </div>
      </div>
    </StyledNav>
  )
}

export default Navbar
