import { Col, Row } from 'antd';
import NetWorkRoutes from '../components/networkRoutes';

const PendingReqsRoute = () => {
  return (
    <Row justify='center' align='center' gutter={24}>
      <Col span={7}>
        <NetWorkRoutes />
      </Col>
      <Col span={17}>
        col
      </Col>
    </Row>
  );
}

export default PendingReqsRoute