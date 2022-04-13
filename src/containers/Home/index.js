import { Col, Row } from 'antd';
import Card from 'styles/components/card';
import CompsToFollow from './compsToFollow';
import MyProfile from './my-profile';
import CraetePost from './posts/CraetePost';
import Shortcuts from './shortcuts';

const HomePage = () => {
  return (
      <Row justify='center' align='center' gutter={24}>
        <Col span={5}>
          <MyProfile />
          <Shortcuts />
        </Col>
        <Col span={12}>
          <CraetePost />
          <Card gap_y={8}>Post</Card>
        </Col>
        <Col span={7}>
          <CompsToFollow />
          <Card>card</Card>
        </Col>
      </Row>
  );
}

export default HomePage;