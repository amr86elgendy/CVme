import React from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
// import useWindowSize from 'hooks/useWindowSize'
import StyledLayout from './Layout.style';
import Navbar from './navbar/Navbar'

const { Content } = Layout

function AppLayout() {
  // const { width, height } = useWindowSize()

  return (
    <StyledLayout>
      <Navbar />
      <Content>
        <div className="container" style={{ padding: '1.5rem 0'}}><Outlet /></div>
      </Content>
    </StyledLayout>
  )
}

export default AppLayout
