import React from 'react'
import { Col, Layout, Row } from 'antd'
import PropTypes from 'prop-types'
// import useWindowSize from 'hooks/useWindowSize'
import LayoutStyled from './Layout.style'
import Navbar from './navbar/Navbar'
import { Outlet } from 'react-router-dom'

const { Content } = Layout

function RegisterLayout({ children }) {
  // const { width, height } = useWindowSize()

  return (
    <LayoutStyled>
      <Navbar />
      <Content>
        <div className="container" style={{ padding: '1.5rem 0'}}><Outlet /></div>
      </Content>
    </LayoutStyled>
  )
}
RegisterLayout.defaultProps = {
  children: null,
}
RegisterLayout.propTypes = {
  children: PropTypes.node,
}
export default RegisterLayout
