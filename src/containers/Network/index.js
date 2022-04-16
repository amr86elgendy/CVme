import React from 'react';
import { Col, Row } from 'antd';
import NetWorkRoutes from './components/networkRoutes';
// import NetworkLandingPage from './components/networkLandingPage';
import { Outlet } from 'react-router-dom';

const NetworkPage = () => {
  return (
      <Row justify='center' align='center' gutter={24}>
        <Col span={7}>
          <NetWorkRoutes />
        </Col>
        <Col span={17}>
          {/* <NetworkLandingPage /> */}
          <Outlet />
        </Col>
      </Row>
  );
};

export default NetworkPage;
