import React from 'react'
import Layout from 'layout';
import { Col, Row } from 'antd';
import {Card} from 'antd'
import NetWorkRoutes from './components/networkRoutes'
import NetworkLandingPage from './components/networkLandingPage'

const NetworkPage = () => {
  return (
    <Layout>
      <Row
        justify="center"
        align="center"
        gutter={24}
      >
        <Col span={8}>
          <Card>
            <NetWorkRoutes />
          </Card>
        </Col>
        <Col span={16}>
          <NetworkLandingPage />
        </Col>
      </Row>
    </Layout>
  )
}

export default NetworkPage